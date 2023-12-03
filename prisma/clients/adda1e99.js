import {PrismaClient as C_adda1e99} from '../generated/adda1e99';

                            import dotenv from 'dotenv';

                            dotenv.config();

                            const cadda1e99 = new C_adda1e99({datasources:{db:{url:process.env.SCHEMA_URL+'adda1e99'}}});

                            export default cadda1e99;
