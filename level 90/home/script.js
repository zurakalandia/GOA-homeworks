//1
let collectArgs = (...args) => args;

//2
let sum = (...numbers) => numbers.reduce((acc, value) => acc + value, 0);

//3

let excludeFirst = (first, ...rest) => rest

//4

let logExceptLast = (...items) => items.slice(0, -1).forEach(item => console.log(item));

//5

const arr = [1, 2, 3, 4, 5];

let [first, second, ...rest] = arr;

//6

const user = { name: "Davit", age: 25, role: "admin", active: true };

let {name, age, ...rest1} = user;

//7

let filterOut = (target, ...values) => values.filter(value => value !== target);

//8

class Logger {
    constructor(prefix, ...messages) {
        this.prefix = prefix;
        this.messages = messages;
    }

    logAll() {
        this.messages.forEach(message => console.log(this.prefix + ': ' + message));
    }
}

function logger(prefix, ...messages) {
    this.prefix = prefix;
    this.messages = messages;

    this.logAll = () => {
        this.messages.forEach(message => console.log(this.prefix + ': ' + message));
    }
}

//9

const data = [1, [2, 3, 4], 5];

let [one, [ , ...rest2], ] = data;

//10

function flatten(...args) {
    let result = [];
    for(let arg of args) {
        if(Array.isArray) {
            result.push(...flatten(...arg));
        } else {
            result.push(arg);
        }
    }

    return result;
}


