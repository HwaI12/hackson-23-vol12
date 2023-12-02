import Stock from './stock.js';

async function importClient(accountId){
    const client = require(`../../../prisma/clients/${accountId}.js`);
    return client;
};

export default class Log{
    constructor(accountId){
        this.user = accountId;
    };

    async insert(data){
        // clientをimport
        const userSchema = await importClient(this.user);
        const logTable = userSchema.default.log;

        // テーブルごとのログを残す
        const query = await logTable.createMany({
            data: data
        });

        return query;
    };

    async profit() {
        // clientをimport
        const userSchema = await importClient(this.user);
        const logTable = userSchema.default.log;

        // 日付、価格、数量を取得
        const query = await logTable.findMany({
            select: {
                timestamp: true,
                price: true,
                quantity: true
            }
        });

        // 日付ごとに収益と数量を集計
        const result = query.reduce((acc, { timestamp, price, quantity }) => {
            const dateString = timestamp.toISOString().split('T')[0];
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
        // clientをimport
        const userSchema = await importClient(this.user);
        const logTable = userSchema.default.log;

        // 商品名、数量を取得
        const query = await logTable.findMany({
            select: {
                stock: true,
                quantity: true
            }
        });
    
        // 商品ごとに数量を集計
        const aggregatedData = query.reduce((acc, item) => {
            // `stock`値をキーとしてアクセス
            if (acc[item.stock]) {
              // 既に存在する場合は、`quantity`を加算
                acc[item.stock].quantity += item.quantity;
            } else {
              // 存在しない場合は、新しいオブジェクトを作成
                acc[item.stock] = { ...item };
            }
            return acc;
        }, {});
        
        // 結果を配列に変換
        const stockTable = new Stock(this.user);
        const result = Object.values(aggregatedData);
        for (let item of result){
            const stockname = await stockTable.select_name(item.stock);
            item.stock = stockname.name;
        }
        
        // ランキングを作成
        // quantityで降順にソート
        result.sort((a, b) => b.quantity - a.quantity);

        // rankを追加
        const rankResult = [];
        result.forEach((item, index) => {
            rankResult.push({rank : index + 1, ...item});
        });

        return rankResult;
    }

    async correlation(){
        // clientをimport
        const userSchema = await importClient(this.user);
        const logTable = userSchema.default.log;

        // product, price, quantityを取得
        const query = await logTable.findMany({
            select: {
                stock: true,
                price: true,
                quantity: true
            }
        });

        // 商品ごとに数量を集計
        const aggregatedData = query.reduce((acc, item) => {
            // `stock`値をキーとしてアクセス
            if (acc[item.stock]) {
              // 既に存在する場合は、`quantity`を加算
                acc[item.stock].quantity += item.quantity;
            } else {
              // 存在しない場合は、新しいオブジェクトを作成
                acc[item.stock] = { ...item };
            }
            return acc;
        }, {});
        const result = Object.values(aggregatedData);

        // 結果を配列に変換
        const stockTable = new Stock(this.user);
        for (let item of result){
            const stockname = await stockTable.select_name(item.stock);
            item.stock = stockname.name;
        }

        return result;
    };
};