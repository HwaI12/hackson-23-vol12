// /[account_id]/analyze
// [GET] /api/order/analyze/[id]
// Log.profit(), Log.sales(), Log.correlation()を呼び出す
// 成功
// バック：return {profit: , sales: , correlation: }
// フロント：それぞれの#に受け取ったデータを入れてグラフを表示する
// エラー
// バック： return Exception.message
// フロント:「失敗しました」+ Exception.messageを表示

import Log from '../../../scripts/crud/log.js';
const log = new Log();

export async function GET(request) {
    try {
        const { profit, sales, correlation } = await log.analyze(request.params.id);
        return { profit, sales, correlation };
    } catch (Exception) {
        return Exception.message;
    }
};
