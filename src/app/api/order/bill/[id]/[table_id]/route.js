// /[account_id]/menu/[table_id]
// [GET] /api/order/bill/[id]/[table_id]
// Order.reset_table()を呼び出す
// 成功
// バック：true
// フロント：「会計が完了しました。レジへお進みください」
// エラー
// バック： return Exception.message
// フロント:「失敗しました」+ Exception.messageを表示

import { NextResponse } from 'next/server';
import Order from '../../../scripts/crud/order.js';
const order = new Order();

export async function GET(request) {
    const query = await order.reset_table(request.params.id, request.params.table_id)
    
    return NextResponse.json({query: query}, { status: 500 });
}