// [account_id]/menu/[table_id]
// [POST] /api/order/post/[id]/[table_id]　data = {product_name:, quantity: }
// Order.insert()を呼び出す（※1つの注文に対してしか使えないので、mapで回して使う）
// 成功
// バック：true
// フロント：「注文を送信しました」のアラート
// エラー
// バック： return Exception.message
// フロント:「失敗しました」+ Exception.messageを表示

import { NextResponse } from 'next/server';
import Order from '../../../../../../scripts/crud/order.js';

export async function POST(request, {params}) {
    try{
        const body = await request.json();

        const order = new Order(params.id);
        const query = await order.insert(params.table, body.product, body.quantity)
        
        return NextResponse.json(query);
    }catch(e){
        return NextResponse.json({ error: e.message });
    }
}