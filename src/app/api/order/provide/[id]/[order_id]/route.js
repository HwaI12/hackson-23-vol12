// /?
// [GET] /api/provide/[id]/[order_id]
// Order.provide()を呼び出す
// 成功
// バック：true
// エラー
// バック： return Exception.message

import { NextResponse } from 'next/server';
import Order from '../../../scripts/crud/order.js';

export async function GET(request) {
    const order = await new Order(request.params.id);
    const query = await order.provide(request.params.id, request.params.order_id)
        
    return NextResponse.json({query: query}, { status: 500 });
}