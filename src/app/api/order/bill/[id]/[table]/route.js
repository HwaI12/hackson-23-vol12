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
import Order from '../../../../../../scripts/crud/order.js';

export async function GET(request, {params}) {
    try{
        const order = new Order(params.id);
        const query = await order.reset_table(params.table)
        
        return NextResponse.json(query);
    } catch (e) {
        return NextResponse.json({ error: e.message });
    }
}