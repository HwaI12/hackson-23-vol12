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
            })
            .catch((err) => {
                console.error(err);
            });
    }

    static async insert(){
        
    };

    static async provide(){
        
    };

    static async cancel(){
        
    }

    static async reset_table(){
        
    }
};
