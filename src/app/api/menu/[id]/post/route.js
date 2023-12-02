import { NextResponse } from 'next/server';
import Webpage from '../../../../../scripts/crud/webpage.js';
import Product from '../../../../../scripts/crud/product.js';
import createSchema from '../../../../../scripts/create_schema.js';

export default async function POST(request, {params}) {
    const webpage = await new Webpage(params.id);
    const product = await new Product(params.id);

    if (request.body.status){
        // アカウントのmenuを更新
        const web_query = await webpage.update(params.id, request.body.color, request.body.table, request.body.menu)
        // アカウントのproductを更新
        const product_query = await product.upsert();
        
        return NextResponse.json({ web_query: web_query, product_query: product_query }, { status: 500 })
    
    }else{
        // アカウントのmenuを新規登録
        const web_query = await webpage.insert(params.id, request.body.color, request.body.table, request.body.menu)
        // アカウントのschemaを新規登録
        createSchema(params.id)
            .then((result) => {
                return true;
            }).catch((err) => {
                throw err;
            });

        // productを新規登録
        const product_query = await product.upsert();
        return NextResponse.json({ web_query: web_query, product_query: product_query }, { status: 500 });

    }
};