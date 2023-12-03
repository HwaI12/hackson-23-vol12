import {PrismaClient as C_9bdd4a3f} from '../generated/9bdd4a3f';

                            import dotenv from 'dotenv';

                            dotenv.config();

                            const c9bdd4a3f = new C_9bdd4a3f({datasources:{db:{url:process.env.SCHEMA_URL+'9bdd4a3f'}}});

                            export default c9bdd4a3f;
