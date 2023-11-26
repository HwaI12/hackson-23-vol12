import dotenv from 'dotenv';
dotenv.config();

export class Table{
    constructor(accountId){
        import(`../../../prisma/generated/${accountId}`)
            .then((account) => {
                this.Account = new account({
                    datasources: { db: { url: process.env.SCHEMA_URL + accountId } },
                })
                this.tableTable = this.Account.table;
            })
            .catch((err) => {
                console.error(err);
            });
    }

    static async insert(){
        
    };

    static async update(){
        
    };
};
