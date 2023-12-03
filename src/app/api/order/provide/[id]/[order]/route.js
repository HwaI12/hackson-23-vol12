// /?
// [GET] /api/provide/[id]/[order_id]
// Order.provide()を呼び出す
// 成功
// バック：true
// エラー
// バック： return Exception.message

import { NextResponse } from 'next/server';
import Order from '../../../../../../scripts/crud/order.js';

export async function GET(request, {params}) {
    try{
        const order = new Order(params.id);
        const query = await order.provide(params.order)
            
        return NextResponse.json(query);
    }catch(e){
        return NextResponse.json({ error: e.message });
    }
}