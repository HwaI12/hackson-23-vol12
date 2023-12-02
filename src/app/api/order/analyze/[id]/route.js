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

export async function GET(request) {
    try {
        const log = await new Log(request.params.id);
        const analyzeData = { profit: log.profit(), sales: log.sales(), correlation: log.correlation()};
        
        return NextResponse.json(analyzeData, { status: 500 });
    } catch (Exception) {
        return NextResponse.json({ error: Exception.message }, { status: 500 });
    }
};
