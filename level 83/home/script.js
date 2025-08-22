let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let allEven = arr.every(num => num % 2 === 0);

//

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

let hasLongString = fruits.some(i => i.length > 5);

//

let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let doubledNumbers = [];

arr1.forEach(num => doubledNumbers.push(num * 2));

//

let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 19 },
  { name: "Diana", age: 27 },
  { name: "Ethan", age: 40 }
];

allAdults = users.every(user => user.age >= 18);

//

let products = [
  { name: "Laptop", price: 1200 },
  { name: "Headphones", price: 150 },
  { name: "Keyboard", price: 80 },
  { name: "Monitor", price: 300 },
  { name: "Mouse", price: 40 }
];

let hasAffordableProduct = products.some(item => item.price < 20);

//6

ordersArray = [{
    orderId: 1,
    customerId: 11,
    items: [{
        title: 'title1',
        price: 60,
        quantity: 1
    }, {
        title: 'title2',
        price: 65,
        quantity: 1
    }],
    shippingAddress: 'adress1',
    isDelivered: false
},
{
    orderId: 2,
    customerId: 14,
    items: [{
        title: 'title3',
        price: 60,
        quantity: 1
    }, {
        title: 'title1',
        price: 65,
        quantity: 2
    }],
    shippingAddress: 'adress4',
    isDelivered: true
}];


let allOrdersHaveItems = ordersArray.every(order => order.items.length > 0);

console.log(allOrdersHaveItems);

let hasPendingDelivery = ordersArray.some(order => order.isDelivered === false);

ordersArray.forEach(order => {
    console.log(`Processing order ID: ${order.orderId}`);

    order.items.forEach(item => console.log(`- ${item.title} (Quantity: ${item.quantity})`));

    let allExpensive = order.items.every(item => item.price > 10);
    console.log(`Order ${order.orderId} contains only expensive books: ${allExpensive}`);

    let hasMultipleCopies = order.items.some(item => item.quantity > 1);
    console.log(`Order ${order.orderId} has multiple copies of at least one book: ${hasMultipleCopies}`);
});