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
import Order from '../../../scripts/crud/order.js';

export async function POST(request) {
    const order = await new Order(request.params.id);
    const query = await order.insert(request.params.id, request.params.table_id, request.body.product_name, request.body.quantity)
    
    return NextResponse.json({query: query}, { status: 500 });
}