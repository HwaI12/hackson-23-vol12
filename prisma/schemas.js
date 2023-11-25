import dotenv from 'dotenv';
dotenv.config();

import { PrismaClient as operator } from "./generated/operator/index.js";
export const Operator = new operator({
    datasources: { db: { url: process.env.PUBLIC_URL } },
})