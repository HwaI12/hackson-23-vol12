import { exec } from 'child_process';
import Fs from 'fs';

export default function createSchema(accountId) {
    Fs.readFile("./prisma/template.prisma", 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        }
    
        // ファイルの内容を変更する
        const modifiedData = data.replace(/ACCOUNTID/g, accountId);
    
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
            console.log("migrate done")
        }
    );

    // モデルを作成する
    exec(`npx prisma generate --schema prisma/models/${accountId}.prisma`, 
            (err, stdout, stderr) => {
        if (err) {
            console.error(err)
        }
            console.log("client generate done")
        }
    );

    // クライアントを作成する
    const clientcontent =  `import {PrismaClient as C_${accountId}} from '../generated/${accountId}';\n
                            import dotenv from 'dotenv';\n
                            dotenv.config();\n
                            const c${accountId} = new C_${accountId}({datasources:{db:{url:process.env.SCHEMA_URL+'${accountId}'}}});\n
                            export default c${accountId};\n`;

    Fs.writeFile(`./prisma/clients/${accountId}.js`, clientcontent, 'utf8', (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('clients created');
        }
    });
};