import fs from 'fs';
import { PrismaClient } from '@prisma/client';

const accountId = '1234';

const newimportContent = `import {PrismaClient} from '../../../prisma/generated/${accountId}';\n`;

const newexportContent = `export const c${accountId} = new PrismaClient({datasources:{db:{url:process.env.SCHEMA_URL+'${accountId}'},},});`;

fs.readFile("./prisma/clients.js", 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const importIndex = data.indexOf('import {PrismaClient} from');

    const modifiedData = data.slice(0, importIndex).trim() + newimportContent + data.slice(importIndex).trim() + '\n' + newexportContent;
    
    fs.writeFile(`./prisma/clients.js`, modifiedData, 'utf8', (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('clients.js updated');
            const prismaClient = new PrismaClient({
                datasources: {
                    db: { url: process.env.SCHEMA_URL + accountId },
                },
            });
            prismaClient.$disconnect();
        }
    });
});