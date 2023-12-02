import Stock from "./stock.js";
import Log from "./log.js";
import dotenv from 'dotenv';
dotenv.config();

export class Order{
    constructor(accountId){
        import(`../../../prisma/generated/${accountId}`)
            .then((account) => {
                this.Account = new account({
                    datasources: { db: { url: process.env.SCHEMA_URL + accountId } },
                })
                this.orderTable = this.Account.order;
                this.user = accountId;
            })
            .catch((err) => {
                console.error(err);
            });
    };

    // 1つの注文に対してしか使えないので、mapで回して使う
    async insert(table_id, stock_name, quantity){
        
        // 商品idと価格を取得
        const stock = await stock.findFirst({
            where: {
                name: stock_name
            }
        });
        console.log(stock);

        // テーブルに追加
        // const query = await this.orderTable.create({
        //     data: {
        //         table_id: table_id,
        //         stock_id: stock.id,
        //         quantity: stock.price* quantity
        //     }
        // });

        // return query;
    };

    async provide(order_id){
        const query = await this.orderTable.update({
            where: {
                id: order_id
            },
            data:{
                provide: true
            }
        });

        return query;
    };

    async cancel(order_id){
        const query = await this.orderTable.delete({
            where: {
                id: order_id
            }
        });
        
        return query;
    };

    async reset_table(table_id){
        // テーブルの注文を取得
        const table_order = await this.orderTable.findMany({
            where: {
                table: table_id
            }
        });

        // json整形
        console.log(table_order);

        // logテーブルに追加
        const log_query = await Log.insert(table_order);

        // テーブルの注文を削除
        // const query = await this.orderTable.deleteMany({
        //     where: {
        //         table: table_id
        //     }
        // });

        // return query;
    };
};
