import {PrismaClient as C_98a87f76} from '../generated/98a87f76';

                            import dotenv from 'dotenv';

                            dotenv.config();

                            const c98a87f76 = new C_98a87f76({datasources:{db:{url:process.env.SCHEMA_URL+'98a87f76'}}});

                            export default c98a87f76;
