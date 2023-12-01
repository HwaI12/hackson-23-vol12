import Account from '../../../scripts/crud/account.js';
const account = new Account();

export async function POST(request) {
    const query = await account.register(request.body.name, request.body.email, request.body.password)
        .then(() => {
            return query;
        }).catch((error) => {
            return error.message;
        });
};