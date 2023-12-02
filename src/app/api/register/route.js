import { NextResponse } from 'next/server';
import createSchema from '../../../scripts/create_schema.js';
import Account from '../../../scripts/crud/account.js';
const account = new Account();

export async function POST(request) {
    const body =await request.json();
    const query = await account.register(body.name, body.email, body.password)

    if (query){
        createSchema(query);
    }
    return NextResponse.json({ account_id: query })
};
