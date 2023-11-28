import dotenv from 'dotenv';
dotenv.config();

export class Account{
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
