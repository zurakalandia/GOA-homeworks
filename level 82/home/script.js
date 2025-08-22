//1

function checkType(value) {
    if(value == null || (typeof(value) != 'object') && typeof(value) != 'function') {
        console.log('primitive');
    } else {
        console.log('non-primitive');
    }
}

//2

function isFalsy (array) {
    return array.every(item => !item);
};

//3

function removeFalsy (array) {
    let newArr = []
    for(let i of array) {
        if(i) {
            newArr.push(i);
        }
    
    }
    return newArr;
}

//4

function countTruthiesAndFalsies(array) {
    let truthy = 0;
    let falsy = 0;
    for(let i of array) {
        if(i) {
            truthy++;
        } else {
            falsy++
        }
    }
    let truthiesAndFalsies = {
        truthy: truthy,
        falsy: falsy
    };

    return truthiesAndFalsies;
}

//5

let a = "hello";
let b = a;
b = "world";

console.log(a); // 'hello'
console.log(b); // 'world' primitive

let x = { name: "Janeza" };
let y = x;
y.name = "Master";

console.log(x.name); // 'Master'
console.log(y.name); // 'Master' non primitive

//6

const arr = ["JS", "React", "Node"];

console.log("Using for...in:");
for (let key in arr) {
  console.log(key); //0, 1, 2
}

console.log("Using for...of:");
for (let value of arr) {
  console.log(value); //'JS', 'Reacft', 'Node'
}

//7

let car = {
  brand: "Mazda",
  model: "MX-5 Miata",
  color: "Soul Red",
  year: 2021,
  isElectric: false
};

for(let i in car) {
    console.log(i);
}

let fruits = ["mango", "blueberry", "kiwi", "pineapple", "grapefruit"];

for(let i of fruits) {
    console.log(i);
}
