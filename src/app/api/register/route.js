import { NextResponse } from 'next/server';
import createSchema from '../../../scripts/create_schema.js';
import Account from '../../../scripts/crud/account.js';
const account = new Account();

export async function POST(request) {
    try{
        const body =await request.json();
        const query = await account.register(body.name, body.email, body.password)

        if (query){
            createSchema(query);
        }
        return NextResponse.json({ account_id: query }, { status: 500 })
    }catch(e){
        return NextResponse.json({ error: e.message }, { status: 500 })
    }
    return NextResponse.json({ account_id: query })
};
