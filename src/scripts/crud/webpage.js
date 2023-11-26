import { PrismaClient as operator } from "../../../prisma/generated/operator";
import dotenv from 'dotenv';
dotenv.config();

export class Webpage{
    constructor(){
        this.Operator = new operator({
                datasources: { db: { url: process.env.PUBLIC_URL } },
            })
        this.webpageTable = this.Operator.webpage;
    }

    static async insert(){
    
    };

    static async select(){
        
    };

    static async update(){
    
    };
};
