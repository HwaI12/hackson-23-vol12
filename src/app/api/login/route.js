import { NextResponse } from 'next/server';
import Account from '../../../scripts/crud/account.js';
const account = new Account();

export async function POST(request) {
    try{
        const body = await request.json();
        const query = await account.login(body.email, body.password)
        
        return NextResponse.json({ account_id: query })
    
    }catch(e){
        return NextResponse.json({ error: e.message })
    }
};