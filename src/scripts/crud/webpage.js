import dotenv from 'dotenv';
dotenv.config();
import { PrismaClient as Operator } from '../../../prisma/generated/operator';

export default class Webpage{
    constructor(){
        this.client = new Operator({
            datasources: { db: { url: process.env.PUBLIC_URL } },
        })
        this.webpageTable = this.client.webpage; 
    };

    async insert(account_id, color, table, menu){
        const query = await this.webpageTable.create({
            data: {
                id: account_id,
                color: color,
                table: table,
                menu: menu
            }
        });
        return query;
    };

    async select(account_id){
        const query = await this.webpageTable.findFirst({
            where: {
                id: account_id
            }
        });
        
        if (query){
            return query;
        }else{
            return false;
        }
    };

    async update(account_id, color, table, menu){
        const query = await this.webpageTable.update({
            where: {
                id: account_id
            },
            data: {
                color: color,
                table: table,
                menu: menu
            }
        });
        return query;
    };
};
