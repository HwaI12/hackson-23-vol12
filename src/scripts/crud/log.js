import dotenv from 'dotenv';
dotenv.config();

export class Log{
    constructor(accountId){
        import(`../../../prisma/generated/${accountId}`)
            .then((account) => {
                this.Account = new account({
                    datasources: { db: { url: process.env.SCHEMA_URL + accountId } },
                })
                this.logTable = this.Account.log;
                this.user = accountId;
            })
            .catch((err) => {
                console.error(err);
            });
    };

    async insert(data){
        const query = await this.logTable.createMany({
            data: data
        });

        return query;
    };

    async profit() {
        // 日付、価格、数量を取得
        const query = await this.logTable.findMany({
            select: {
                date: true,
                price: true,
                quantity: true
            }
        });

        // 日付ごとに収益と数量を集計
        const result = query.reduce((acc, { date, price, quantity }) => {
            const dateString = date.toISOString().split('T')[0];
            if (!acc[dateString]) {
                acc[dateString] = { profit: 0, quantity: 0 };
            }
            acc[dateString].profit += price * quantity; // 収益 = 価格 * 数量
            acc[dateString].quantity += quantity; // 数量
            return acc;
        }, {});
        
        return {
            date: Object.keys(result),
            profit: Object.values(result).map(entry => entry.profit),
            quantity: Object.values(result).map(entry => entry.quantity)
        };
    };

    async sales() {
        // 商品名、数量を取得
        const query = await this.logTable.findMany({
            select: {
                product: true,
                quantity: true
            }
        });
    
        // 商品ごとに数量を集計
        const result = query.reduce((acc, { product, quantity }) => {
            if (!acc[product]) {
                acc[product] = 0;
            }
            acc[product] += quantity;
            return acc;
        }, {});
        
        // 商品名と数量を取得
        const series = Object.keys(result);
        const values = Object.values(result);
        
        // ランキングを作成
        const rankedResults = series.map((product, index) => ({
            rank: index + 1,
            product,
            quantity: values[index]
        })).sort((a, b) => b.quantity - a.quantity);
    
        return rankedResults;
    }

    async correlation(){
        // product, price, quantityを取得
        const query = await this.logTable.findMany({
            select: {
                product: true,
                price: true,
                quantity: true
            }
        });

        console.log(query);
        
    };
};