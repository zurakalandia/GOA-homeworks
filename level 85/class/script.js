//1

const mixedData = [10, "apple", 5, "banana", 20, "cherry"];

let firstString = mixedData.find(item => typeof item === 'string');

console.log(firstString);

//2

let fruits = ['mango', 'orange'];

let isFruitsArray = Array.isArray((fruits));

console.log(isFruitsArray);

//3

let stringsOnly = mixedData.filter(item => typeof item === "string");

let stringsLengths = Array.from(stringsOnly, string => string.length);


console.log(stringsLengths);

//4

let reversedData = [...mixedData].reverse();

console.log(reversedData);

//5

let numbers = mixedData.filter(item => typeof item === 'number');

let sortedNumbers = numbers.sort((a, b) => a - b);

console.log(sortedNumbers);


