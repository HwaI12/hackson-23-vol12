import { PrismaClient as operator } from "../../../prisma/generated/operator";
import dotenv from 'dotenv';
dotenv.config();

export class Account{
    constructor(){
        this.Operator = new operator({
                datasources: { db: { url: process.env.PUBLIC_URL } },
            })
        this.accountTable = this.Operator.account;
    };

    static async login(email, password){
        const query = await this.accountTable.findFirst({
            where: {
                email: email,
                password: password
            }
        });
        if(query){
            return query.id;
        }else{
            return false;
        }
    };

    static async register(name, email, password){
        const query = await this.accountTable.findFirst({
            where: {
                email: email
            }
        });
        if(query){
            return false;
        }else{
            const query = await this.accountTable.create({
                data: {
                    name: name,
                    email: email,
                    password: password
                }
            });
            return query.id;
        }
    };

    static async delete(Account_id){
        const query = await this.accountTable.delete({
            where: {
                id: Account_id
            }
        });
        return query;
    };
};
