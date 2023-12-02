import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from '@prisma/client';

dotenv.config();
const prisma = new PrismaClient();

export default class Account{
    constructor(accountId){
        import(`../../../prisma/generated/${accountId}`)
            .then((account) => {
                this.Account = new account({
                    datasources: { db: { url: process.env.SCHEMA_URL + accountId } },
                })
                this.accountTable = this.Account.account;
                this.user = accountId;
            })
            .catch((err) => {
                console.error(err);
            });
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
        const existingUser = await prisma.account.findUnique({
            where: { email: email }
        });

        if (existingUser) {
            return false;
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(password, salt);

            const accountId = uuidv4();

            const newUser = await prisma.account.create({
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
