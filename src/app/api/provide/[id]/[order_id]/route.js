// /?
// [GET] /api/provide/[id]/[order_id]
// Order.provide()を呼び出す
// 成功
// バック：true
// エラー
// バック： return Exception.message

import Order from '../../../scripts/crud/order.js';
const order = new Order();

export async function GET(request) {
    const query = await order.provide(request.params.id, request.params.order_id)
        .then((result) => {
            return result;
        }).catch((Exception) => {
            return Exception.message;
        });
    return query;
}