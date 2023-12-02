import {PrismaClient as C_3e24db21} from '../generated/3e24db21';
import dotenv from 'dotenv';
dotenv.config();
const c3e24db21 = new C_3e24db21({datasources:{db:{url:process.env.SCHEMA_URL+"3e24db21"}}});
export default c3e24db21;