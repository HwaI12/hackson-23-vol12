import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

export class Account{
    constructor(){
        import(`../../../prisma/generated/operator`)
            .then((account) => {
                this.Operator = new account({
                    datasources: { db: { url: process.env.PUBLIC_URL } },
                })
                this.accountTable = this.Operator.account;
            })
            .catch((err) => {
                console.error(err);
            });
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

    static async register(name, email, password) {
        const existingUser = await this.accountTable.findUnique({
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

    static async delete(account_id){
        const query = await this.accountTable.delete({
            where: {
                id: account_id
            }
        });
        return query;
    };
};
