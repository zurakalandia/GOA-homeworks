var score = 0;

function increaseScore() {
    score += 10;
}

for(let i = 0; i < 2; i++) {
    increaseScore();
};

console.log(score);

//--------------------------

function secretCode() {
    let code = '1234';
}

secretCode();
console.log(code); //Error

var name = 'World';

function greet() {
    let name = 'Alice';
    console.log(name);
}

greet();
console.log(name);

//-------------------------------

function counterGame() {
    let counter = 0;
    counter++;
    console.log(counter); //always one
}

//---------------------------

function random() {
    value = 1;
    
}


console.log(value); //not defined

//a global variable is a variable, scope of which isnt limited, u can access it anywhere.

//a local variable is a varibale, scope of which is limited, u can access it only within the scope.

let add = (a, b) => a + b;

//---------------------------

let double = n => n * 2;

//---------------------------

let firstChar = str => str[0];

//---------------------------

let shout = str => str.toUpperCase();

//---------------------------

let isPrime = n => {
    if (n <= 1) return false; 
    if (n === 2) return true; 
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

//----------------------------

let checlNumber = n => {
    if(num === 0) {
        return 'Zero';
    } else if(num < 0) {
        return 'Negative';
    } else {
        return 'Postivie';
    }
}

//----------------------------

let fizzBuzz = number => {
    if(number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz';
    } else if (number % 3 === 0) {
        return 'Fizz';
    } else if (number % 5 === 0) {
        return 'Buzz';
    } else {
        return number;
    }
}

