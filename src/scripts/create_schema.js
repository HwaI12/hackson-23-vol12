const { exec } = require('child_process')
const Fs = require("fs");

createSchema = (accountId) => {
    Fs.readFile("./prisma/template.prisma", 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
    
        // ファイルの内容を変更する
        const modifiedData = data.replace("ACCOUNTID", accountId);
    
        // 変更した内容でファイルを上書きする
        Fs.writeFile(`./prisma/models/${accountId}.prisma`, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('File has been updated');
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
};

createSchema("test");