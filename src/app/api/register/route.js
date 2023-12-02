import { NextResponse } from 'next/server';
import Account from '../../../scripts/crud/account.js';
const account = new Account();

export async function POST(request) {
    try {
        const { name, email, password } = request.body;

        // パスワードが空でないことを確認
        if (!password || password.trim() === '') {
            return NextResponse.error('パスワードが空です', 400); // エラーステータスコードを設定
        }

        const query = await account.register(name, email, password);

        return NextResponse.json({ account_id: query }); // 成功時は200が自動的に設定されます
    } catch (error) {
        console.error("Registration error: ", error);
        return NextResponse.error("Internal server error", 500);
    }
}