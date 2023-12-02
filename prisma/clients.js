import {PrismaClient} from '../../../prisma/generated/3e24db21';

export const c3e24db21 = new PrismaClient({datasources:{db:{url:process.env.SCHEMA_URL+"3e24db21"}},});