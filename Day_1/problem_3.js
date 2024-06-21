var prompt = require('prompt-sync')();
class Product {
    constructor(name, price, inStock) {
        this.name = name;
        this.price = price;
        this.inStock = inStock;
    }
}

const product1 = new Product("apple", 11.5, true);
const product2 = new Product("orange", 25.5, true);
const product3 = new Product("grape", 45.5, false);

console.log(product1);
console.log(product2);
console.log(product3);
console.log(product1.name, product1.price, product1.inStock);
console.log(product1.name, product1.price, product1.inStock); 
console.log(product1.name, product1.price, product1.inStock);