import Stock from "./stock.js";
import Log from "./log.js";

async function importClient(accountId){
    const client = require(`../../../prisma/clients/${accountId}.js`);
    return client;
};

export default class Order{
    constructor(accountId){
        this.user = accountId;
    };

    // 1つの注文に対してしか使えないので、mapで回して使う
    async insert(table_id, stock_name, quantity){

        // 商品idと価格を取得
        const stockClient = new Stock(this.user);
        const stock = await stockClient.select_id(stock_name);

        if (stock){
            // テーブルに追加
            const userSchema = await importClient(this.user);
            const orderTable = userSchema.default.order;
            const query = await orderTable.create({
                data: {
                    table: parseInt(table_id),
                    stock: stock.id,
                    quantity: quantity,
                    price: stock.price,
                    provided: false
                }});
                
            return query;

        }else{
            return false;
        }
    };

    async provide(order_id){
        const userSchema = await importClient(this.user);
        const orderTable = userSchema.default.order;

        const query = await orderTable.update({
            where: {
                id: parseInt(order_id)
            },
            data:{
                provided: true
            }
        });

        return query;
    };

    async cancel(order_id){
        // clientをimport
        const userSchema = await importClient(this.user);
        const orderTable = userSchema.default.order;

        const query = await orderTable.delete({
            where: {
                id: order_id
            }
        });
        
        return query;
    };

    async reset_table(table_id){
        // clientをimport
        const userSchema = await importClient(this.user);
        const orderTable = userSchema.default.order;

        // テーブルの注文を取得
        const table_order = await orderTable.findMany({
            where: {
                table: parseInt(table_id)
            }
        });

        // json整形
        const log_data = table_order.map((order) => {
            return {
                table: order.table,
                stock: order.stock,
                quantity: order.quantity,
                price: order.price,
                timestamp: new Date()
            };
        });

        // logテーブルに追加
        const logTable = new Log(this.user);
        const log_query = await logTable.insert(log_data);

        // テーブルの注文を削除
        const query = await orderTable.deleteMany({
            where: {
                table: parseInt(table_id)
            }
        });

        return query;
    };
};
