import Product from "./product.js";
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

    static async insert(table_id, product_name, quantity){
        
        // 商品idと価格を取得
        const product = await Product.findFirst({
            where: {
                name: product_name
            }
        });
        console.log(product);

        // テーブルに追加
        // const query = await this.orderTable.create({
        //     data: {
        //         table_id: table_id,
        //         product_id: product.id,
        //         quantity: product.price* quantity
        //     }
        // });

        // return query;
    };

    static async provide(order_id){
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

    static async cancel(order_id){
        const query = await this.orderTable.delete({
            where: {
                id: order_id
            }
        });
        
        return query;
    };

    static async reset_table(table_id){
        const query = await this.orderTable.deleteMany({
            where: {
                table: table_id
            }
        });

        return query;
    };
};
