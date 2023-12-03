export default function parseStock(menu_json) {
    let products = [];

    for (const category in menu_json) {
        for (const class_ in menu_json[category]) {
            for (const product in menu_json[category][class_]) {
                products.push({name: product, price: menu_json[category][class_][product].price});

                for (const option in menu_json[category][class_][product]) {
                    if (option != "price") {
                        products.push({name: option, price: menu_json[category][class_][product][option].price});
                    }
                }
            }
        }
    }

    const uniqueByName = new Map(products.map(obj => [obj.name, obj]));
    const product = Array.from(uniqueByName.values());

    return product;
};
