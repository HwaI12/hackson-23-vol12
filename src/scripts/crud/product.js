import Webpage from "./webpage.js";
import dotenv from 'dotenv';
dotenv.config();

export class Product{
    constructor(accountId){
        import(`../../../prisma/generated/${accountId}`)
            .then((account) => {
                this.Account = new account({
                    datasources: { db: { url: process.env.SCHEMA_URL + accountId } },
                })
                this.productTable = this.Account.product;
            })
            .catch((err) => {
                console.error(err);
            });
    }

    static async insert(){
        
    };

    static async update(){
        
    };
};
