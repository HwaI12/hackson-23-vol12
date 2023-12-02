import parseStock from "../parse_stock.js";

async function importClient(accountId){
    const client = require(`../../../prisma/clients/${accountId}.js`);
    return client;
};

export default class Stock{
    constructor(accountId){
        this.user = accountId;
    };

    async select_id(name){
        // clientをimport
        const userSchema = await importClient(this.user);
        const stockTable = userSchema.default.stock;

        // stockidを取得
        const query = await stockTable.findFirst({
            where: {
                name: name
            }
        });

        return query;
    };

    async select_name(id){
        // clientをimport
        const userSchema = await importClient(this.user);
        const stockTable = userSchema.default.stock;

        // stockを取得
        const query = await stockTable.findFirst({
            where: {
                id: id
            } 
        });

        return query;
    };

    async upsert(menu){
        // clientをimport
        const userSchema = await importClient(this.user);
        const stockTable = userSchema.default.stock;

        // menuのjsonをparseしてstockとoptionごとのnameとpriceを取得
        const stocks = parseStock(menu);

        // stockを初期化
        const reset = await stockTable.deleteMany({});

        // menuをinsert
        const query = await stockTable.createMany({
            data: stocks
        });
        
        return query;
    };
};
