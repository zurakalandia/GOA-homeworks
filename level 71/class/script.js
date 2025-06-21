
//shift method

let list = [1, 2, 3, 4, 5, 6];

let firstVal = list.shift();

console.log(list);

console.log(firstVal);

let list1 = [1, 2, 3, 4, 5];

for(let i = 0; i < list1.length; i++) {
    list1.shift();
    console.log(list1);
};

//unshift

let newList = list.unshift(7, 8, 9);

console.log(newList);

//fill

let arr = [1, 2, 3, 4, 5];

console.log(arr.fill(20, 0, 3));

console.log(arr);

//---

let serverStatus = [1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1];

console.log(serverStatus.fill(1, 0, 6));

serverStatus.fill(0, 6);

console.log(serverStatus);

//copyWithin

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            //target //start // end (optional)

arr1.copyWithin(0, 3, 6);

console.log(arr1);

//splice

let fruits = ['banana', 'orange', 'apple', 'mango'];

let removed = fruits.splice(1, 3);

console.log(fruits);

console.log(removed);

//---

fruits.splice(1, 0, 'orange', 'apple', 'mango');

console.log(fruits);

//---

fruits.splice(1, 3, 'kiwi');

console.log(fruits);



//

//indexOf

//lastIndex