import dotenv from 'dotenv';
dotenv.config();

import parseStock from "../parse_stock.js";

export default class Stock{
    constructor(accountId){
        
        this.user = accountId;
    };

    async upsert(menu){
        // menuのjsonをparseしてstockとoptionごとのnameとpriceを取得
        const stocks = parseStock(menu);

        // stockを初期化
        const reset = await this.stockTable.destroy({
            where: {}, // 空の where 句はすべてのレコードを対象とします
        });

        // // menuをinsert
        // const query = await this.stockTable.createMany({
        //     data: stocks
        // })
        
        // return query;
    };
};
