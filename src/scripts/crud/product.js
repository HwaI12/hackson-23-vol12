import dotenv from 'dotenv';
dotenv.config();

import Webpage from "./webpage.js";
import parseProduct from "../parse_product.js";

export class Product{
    constructor(accountId){
        import(`../../../prisma/generated/${accountId}`)
            .then((account) => {
                this.Account = new account({
                    datasources: { db: { url: process.env.SCHEMA_URL + accountId } },
                })
                this.productTable = this.Account.product;
                this.user = accountId;
            })
            .catch((err) => {
                console.error(err);
            });
    };

    async upsert(){
        // Webpageからaccount_idのもつmenuを取得
        const menu = await Webpage.findMany({
            where: {
                id: this.user
            }
        });
        console.log(menu);

        // menuのjsonをparseしてproductとoptionごとのnameとpriceを取得
        // const products = parseProduct(menu);

        // productを初期化
        // const reset = await this.productTable.deleteMany({});

        // // menuをinsert
        // const query = await this.createMany({
        //     data: products,
        // }).catch(e => {
        //     throw e;
        // });
        
        // return query;
    };
};
