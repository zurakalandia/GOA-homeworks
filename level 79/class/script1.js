//named function

function sayHello(name) {
    return `hello, ${name}`
};

function addition(num1, num2) {
    return num1 + num2;
};


//anonymus function

let sayHello = function (name) {
    return `hello, ${name}`
};

let addition = function (num1, num2) {
    return num1 + num2;
};

//arrow function

let arrow = name => `hello, ${name}`;

let arrow1 = (num1, num2) => num1 + num2;
