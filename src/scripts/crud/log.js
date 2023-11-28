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

    static async insert(data){
    
    };

    static async profit() {
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

    static async sales(){
    
    };

    static async correlation(){
    
    };
};