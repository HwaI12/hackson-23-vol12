const { exec } = require('child_process')
const Fs = require("fs");

export default createSchema = (accountId) => {
    Fs.readFile("../../prisma/template.prisma", 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
    
        // ファイルの内容を変更する
        const modifiedData = data.replace("ACCOUNTID", accountId);
    
        // 変更した内容でファイルを上書きする
        Fs.writeFile("../../prisma/schema.prisma", modifiedData, 'utf8', (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('File has been updated');
            }
        });
    });

    exec(`npx prisma migrate dev --name ${accountId}`, (err, stdout, stderr) => {
        if (err) {
            console.log(`stderr: ${stderr}`)
        }
            console.log(`stdout: ${stdout}`)
        }
    );
};