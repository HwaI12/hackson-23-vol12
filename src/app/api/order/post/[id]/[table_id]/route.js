// [account_id]/menu/[table_id]
// [POST] /api/order/post/[id]/[table_id]　data = {product_name:, quantity: }
// Order.insert()を呼び出す（※1つの注文に対してしか使えないので、mapで回して使う）
// 成功
// バック：true
// フロント：「注文を送信しました」のアラート
// エラー
// バック： return Exception.message
// フロント:「失敗しました」+ Exception.messageを表示

import Order from '../../../scripts/crud/order.js';
const order = new Order();

export async function POST(request) {
    const query = await order.insert(request.params.id, request.params.table_id, request.body.product_name, request.body.quantity)
        .then((result) => {
            return result;
        }).catch((Exception) => {
            return Exception.message;
        });
    return query;
}