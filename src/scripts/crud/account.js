import { PrismaClient as operator } from "../../../prisma/generated/operator";
import dotenv from 'dotenv';
dotenv.config();

export class Account{
    constructor(){
        this.Operator = new operator({
                datasources: { db: { url: process.env.PUBLIC_URL } },
            })
        this.accountTable = this.Operator.account;
    }

    static async login(){
    
    };

    static async register(){
        
    };

    static async delete(){
    
    };
};
