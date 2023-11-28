import { PrismaClient as operator } from "../../../prisma/generated/operator";
import dotenv from 'dotenv';
dotenv.config();

export class Webpage{
    constructor(){
        this.Operator = new operator({
                datasources: { db: { url: process.env.PUBLIC_URL } },
            })
        this.webpageTable = this.Operator.webpage;
    };

    static async insert(account_id, color, table, menu){
        const query = await this.webpageTable.create({
            data: {
                account_id: account_id,
                color: color,
                table: table,
                menu: menu
            }
        });
        return query;
    };

    static async select(account_id){
        const query = await this.webpageTable.findFirst({
            where: {
                account_id: account_id
            }
        });
        return query;
    };

    static async update(account_id, color, table, menu){
        const query = await this.webpageTable.update({
            where: {
                account_id: account_id
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
