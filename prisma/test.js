import { Operator } from "./schemas.js";

async function main() {
    const allUsers = await Operator.Account.findMany();
    console.log(allUsers);
}

main()
    .catch(e => {
        throw e;
    })
    .finally(async () => {
        await Operator.$disconnect();
});