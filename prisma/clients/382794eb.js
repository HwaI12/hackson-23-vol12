import {PrismaClient as C_382794eb} from '../generated/382794eb';

                            import dotenv from 'dotenv';

                            dotenv.config();

                            const c382794eb = new C_382794eb({datasources:{db:{url:process.env.SCHEMA_URL+'382794eb'}}});

                            export default c382794eb;
