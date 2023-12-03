const fs = require('fs');
const menuData = require('./menu.json'); // Adjust the path as needed

function handler(productName) {
  let productOptions = {};
  console.log(`Searching for product: ${productName}`);
  
  if (module.hot) {
    module.hot.accept(() => {
      console.log('Accepting the updated menu module!');
    });
  }
  
  Object.keys(menuData).forEach((category) => {
    Object.keys(menuData[category]).forEach((className) => {
      Object.keys(menuData[category][className]).forEach((name) => {
        if (name === productName) {
          console.log(`Data for ${name}:`, menuData[category][className][name]);
          productOptions = menuData[category][className][productName].options || {};
        }
      });
    });
  });

  return productOptions;
}

const productName = 'コカコーラ'; // Replace with the actual product name
const options = handler(productName);
console.log('Found options:', options);

module.exports = { productName, options };