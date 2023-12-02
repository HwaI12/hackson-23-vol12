import { NextResponse } from 'next/server';
import Webpage from '../../../../../scripts/crud/webpage.js';
import Stock from '../../../../../scripts/crud/stock.js';

const webpage = new Webpage();

export async function POST(request, { params }) {
    try{
        const body = await request.json();

        if (body.status){
            // アカウントのmenuを更新
            const web_query = await webpage.update(params.id, body.color, body.table, body.menu)
            
            // アカウントのproductを更新
            const stock = new Stock(params.id);
            const stock_query = await stock.upsert(body.menu);

            return NextResponse.json({ web_query: web_query, stock_query: stock_query }, { status: 500 })
        }else{
            // アカウントのmenuを新規登録
            const web_query = await webpage.insert(params.id, body.color, body.table, body.menu)
            
            // stockを新規登録
            const stock = new Stock(params.id);
            const stock_query = await stock.upsert(body.menu);

            return NextResponse.json({ web_query: web_query, stock_query: stock_query }, { status: 500 })
        }
    }catch(e){
        return NextResponse.json({ error: e.message }, { status: 500 })
    }
};