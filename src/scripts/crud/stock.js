import { PrismaClient } from '../../../prisma/generated/3e24db21';
import dotenv from 'dotenv';
dotenv.config();

import parseStock from "../parse_stock.js";

export default class Stock{
    constructor(accountId){
        this.userSchema = new PrismaClient({
            datasources: { db: { url: process.env.SCHEMA_URL + accountId } },
        });
        this.stockTable = this.userSchema.stock;
        this.user = accountId;
    };

    async upsert(menu){
        // menuのjsonをparseしてstockとoptionごとのnameとpriceを取得
        const stocks = parseStock(menu);

        // stockを初期化
        const reset = await this.stockTable.deleteMany({});

        // menuをinsert
        const query = await this.stockTable.createMany({
            data: stocks
        })
        
        return query;
    };
};
