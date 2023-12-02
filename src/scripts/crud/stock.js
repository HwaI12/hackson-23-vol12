import { type } from "os";
import parseStock from "../parse_stock.js";

async function importClient(accountId){
    const client = require(`../../../prisma/clients/${accountId}.js`);
    return client;
};

export default class Stock{
    constructor(accountId){
        this.user = accountId;
    };

    async upsert(menu){
        // clientをimport
        const userSchema = await importClient(this.user);
        const stockTable = userSchema.default.stock;

        // menuのjsonをparseしてstockとoptionごとのnameとpriceを取得
        const stocks = parseStock(menu);

        // stockを初期化
        const reset = await stockTable.deleteMany({});

        // menuをinsert
        const query = await stockTable.createMany({
            data: stocks
        });
        
        return query;
    };
};
