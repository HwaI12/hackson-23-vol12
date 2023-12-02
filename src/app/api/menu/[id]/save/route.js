import { NextResponse } from 'next/server';
import Webpage from '../../../../../scripts/crud/webpage.js';
import Stock from '../../../../../scripts/crud/stock.js';

const webpage = new Webpage();

export async function POST(request, { params }) {
    const body = await request.json();

    if (body.status){
        //const product = new Product(params.id);
        // アカウントのmenuを更新
        const web_query = await webpage.update(params.id, body.color, body.table, body.menu)
        // アカウントのproductを更新
        //const product_query = await product.upsert(body.menu);
        
        return NextResponse.json({ web_query: web_query, product_query: product_query }, { status: 500 })
    
    }else{
        // アカウントのmenuを新規登録
        //const web_query = await webpage.insert(params.id, body.color, body.table, body.menu)
        
        // stockを新規登録
        const stock = new Stock(params.id).upsert(body.menu);

        return NextResponse.json({ res : true }, { status: 500 })
    }
};