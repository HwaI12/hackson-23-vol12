import {PrismaClient as C_52b9fee3} from '../generated/52b9fee3';

                            import dotenv from 'dotenv';

                            dotenv.config();

                            const c52b9fee3 = new C_52b9fee3({datasources:{db:{url:process.env.SCHEMA_URL+'52b9fee3'}}});

                            export default c52b9fee3;
