let products = [
  { name: "Laptop", price: 999.99 },
  { name: "Smartphone", price: 699.99 },
  { name: "Tablet", price: 399.99 },
  { name: "Headphones", price: 199.99 },
  { name: "Smartwatch", price: 249.99 }
];

//1

let productNames = products.map(product => product.name);
console.log(productNames);

//2

let afforrdableProducts = products.filter(product => product.price > 100);

//3

let totalPrice = products.reduce((acc, product) => acc + product.price, 0);

//4

let productsNamesReversed = products.reduceRight((acc, product) => {
    if(acc === '') {
        return product.name;
    }

    return acc + '-' + product.name;
})

console.log(productNamesReversed);