import dotenv from 'dotenv';
dotenv.config();

export class Log{
    constructor(accountId){
        import(`../../../prisma/generated/${accountId}`)
            .then((account) => {
                this.Account = new account({
                    datasources: { db: { url: process.env.SCHEMA_URL + accountId } },
                })
                this.logTable = this.Account.log;
                this.user = accountId;
            })
            .catch((err) => {
                console.error(err);
            });
    };

    static async insert(data){
    
    };

    static async profit(){
        const query = await this.logTable.findMany({
            select: {
                date: true,
                price: true,
                quantity: true
            }
        });
        return query;
    };

    static async sales(){
    
    };

    static async correlation(){
    
    };
};