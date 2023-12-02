import { PrismaClient as operator } from "../../../prisma/generated/operator";
import dotenv from 'dotenv';
dotenv.config();

export class Webpage{
    constructor(accountId){
        import(`../../../prisma/generated/${accountId}`)
            .then((account) => {
                this.Account = new account({
                    datasources: { db: { url: process.env.SCHEMA_URL + accountId } },
                })
                this.WebpageTable = this.Account.webpage;
                this.user = accountId;
            })
            .catch((err) => {
                console.error(err);
            });
    };

    async insert(account_id, color, table, menu){
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

    async select(account_id){
        const query = await this.webpageTable.findFirst({
            where: {
                account_id: account_id
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
