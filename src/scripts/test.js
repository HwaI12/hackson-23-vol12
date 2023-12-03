const fs = require('fs');
const menuData = require('./menu.json'); // あなたのプロジェクトに合わせてパスを調整してください

const categories = Object.keys(menuData);
const classes = {};
const products = {};
const options = {};

categories.forEach((category) => {
    classes[category] = Object.keys(menuData[category]);
    products[category] = {};

    classes[category].forEach((className) => {
        products[category][className] = Object.keys(menuData[category][className]);

        products[category][className].forEach((productName) => {
            const product = menuData[category][className][productName];
            
            menuData[category][className][productName] = product.options || {};
        });
    });
});

console.log('categories:', categories);
console.log('classes:', classes);
console.log('products:', products);
console.log('options:', options);
