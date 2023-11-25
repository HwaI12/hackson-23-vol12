const { exec } = require('child_process')
const Fs = require("fs");

createSchema = (accountId) => {
    Fs.readFile("./prisma/template.prisma", 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        }
    
        // ファイルの内容を変更する
        const modifiedData = data.replace("ACCOUNTID", accountId);
    
        // 変更した内容でファイルを上書きする
        Fs.writeFile(`./prisma/models/${accountId}.prisma`, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('template.prisma updated');
            }
        });
    });

    // マイグレーションファイルを作成する
    exec(`npx prisma migrate dev --name ${accountId} --schema prisma/models/${accountId}.prisma`, 
            (err, stdout, stderr) => {
        if (err) {
            console.error(err)
        }
            console.log(stdout)
        }
    );

    // モデルを作成する
    exec(`npx prisma generate --schema prisma/models/${accountId}.prisma`, 
            (err, stdout, stderr) => {
        if (err) {
            console.error(err)
        }
            console.log(stdout)
        }
    );

    // インスタンスを作成する
    Fs.readFile("./prisma/schemas.js", 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        }

        // ファイルの内容を変更する
        const sorce = data + "\n" +
            `import { PrismaClient as s${accountId} } from "./generated/${accountId}/index.js";
            export const S${accountId} = new s${accountId}({
                datasources: { db: { url: process.env.SCHEMA_URL + "${accountId}" } },
            });`;

        // 変更した内容でファイルを上書きする
        Fs.writeFile(`./prisma/schemas.js`, sorce, 'utf8', (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('shcemas.js updated');
            }
        });
    });
};