import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { PrismaClient as Operator } from '../../../prisma/generated/operator';

dotenv.config();

export default class Account{
    constructor(){
        this.client = new Operator({
            datasources: { db: { url: process.env.PUBLIC_URL } },
        }) 
        this.accountTable = this.client.account;
    };

    async login(email, password){
        const query = await this.accountTable.findFirst({
            where: {
                email: email,
                password: password
            }
        });
        if(query){
            return query.id;
        }else{
            return false;
        }
    };

    async register(name, email, password) {
        try {
            if (!password || password.trim() === '') {
                return NextResponse.error('パスワードが空です', 400);
            }
    
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            
            // console.log("ハッシュ化されたパスワード: ", hash); 
            
            const query = await this.accountTable.create({
                data: {
                    id: uuidv4(),
                    name: name,
                    email: email,
                    password: hash
                }
            });
    
            return query.id;
        } catch (error) {
            console.error("Error in register: ", error);
            throw error;
        }
    };    

    async delete(Account_id){
        const query = await this.accountTable.delete({
            where: {
                id: Account_id
            }
        });
        return query;
    };
};