let person = {
    name: 'Zura',
    age: 14,
    city: 'Tbilisi'
}

for(let i in person) {
    console.log(i);
    console.log(person[i]);
}

//---------------------

let prices = {
  "apple": 1.2,
  "banana": 0.8,
  "bread": 1.5,
  "milk": 2.0,
  "eggs": 3.5
};

let sum = 0;

for(let n in prices) {
    sum += prices[n];
}

//---------------------

let product = {
  name: "Laptop",
  price: 2500,
  inStock: true
}

for(let i in product) {
    if(typeof(product[i]) == int) {
        console.log(product[i]);
    }
}

//---------------------

let books = {
    book1: { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    book2: { title: "To Kill a Mockingbird", author: "Harper Lee" },
    book3: { title: "1984", author: "George Orwell" },
    book4: { title: "Pride and Prejudice", author: "Jane Austen" },
    book5: { title: "The Catcher in the Rye", author: "J.D. Salinger" }
};

titles = [];

for(let i in books) {
    titles.push(books[i].title);
}

//---------------------

let numbers = [5, 10, 15, 20, 25];

let sum1 = 0;

for(let number of numbers) {
    sum1 += number;
}

//---------------------

let str = 'Hello world!';

for(let char of str) {
    console.log(char);
}

//---------------------

let fruits = ["apple", "banana", "orange", "grape", "mango"];

for(let i of fruits) {
    if(i.length > 5) {
        console.log(i);
    }
}



let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

sqrts = [];

for(let n of nums) {
    sqrt.push(n ** 2);
}

