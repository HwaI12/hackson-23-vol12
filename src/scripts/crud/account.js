import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { PrismaClient as Operator } from '../../../prisma/generated/operator';

dotenv.config();

export default class Account{
    constructor(){
        this.client = new Operator({
            datasources: { db: { url: process.env.PUBLIC_URL } },
        }) 
        this.accountTable = this.client.account;
    };

    async login(email, password){
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

    async register(name, email, password) {
        const existingUser = await this.accountTable.findFirst({
            where: { email: email }
        });

        if (existingUser) {
            return false;
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(password, salt);

            const accountId = uuidv4();

            const newUser = await this.accountTable.create({
                data: {
                    id: accountId,
                    name: name,
                    email: email,
                    password: hashedPassword
                }
            });

            return newUser.id;
        }
    };

    async delete(Account_id){
        const query = await this.accountTable.delete({
            where: {
                id: Account_id
            }
        });
        return query;
    };
};
