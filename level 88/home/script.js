//1

const person = { name: "Alice", age: 30, city: "New York" };

let {name, age, } = person;

//2

let{name:userName, ity:userCity} = person;

//3

const student = {
  name: "Bob",
  age: 20,
  grades: {
    math: 90,
    science: 85,
    english: 92,
  },
};

let {grades: {math, english}} = student;

//4

const numbers = [1, 2, 3, 4, 5];

let [first, , third] = numbers;
