// /[account_id]/analyze
// [GET] /api/order/analyze/[id]
// Log.profit(), Log.sales(), Log.correlation()を呼び出す
// 成功
// バック：return {profit: , sales: , correlation: }
// フロント：それぞれの#に受け取ったデータを入れてグラフを表示する
// エラー
// バック： return Exception.message
// フロント:「失敗しました」+ Exception.messageを表示

import { NextResponse } from 'next/server';
import Log from '../../../../../scripts/crud/log.js';

export async function GET(request, { params }) {
    try{
        const log = new Log(params.id);

        const profitData = await log.profit();
        const salesData = await log.sales();
        const correlationData = await log.correlation();

        return NextResponse.json({  profit: profitData, 
                                    sales: salesData, 
                                    correlation: correlationData
                                });
    } catch (e) {
        return NextResponse.json({ error: e.message });
    }
};
