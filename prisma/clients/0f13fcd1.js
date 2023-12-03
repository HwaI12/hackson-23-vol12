import {PrismaClient as C_0f13fcd1} from '../generated/0f13fcd1';

                            import dotenv from 'dotenv';

                            dotenv.config();

                            const c0f13fcd1 = new C_0f13fcd1({datasources:{db:{url:process.env.SCHEMA_URL+'0f13fcd1'}}});

                            export default c0f13fcd1;
