let arr1 = [0, 1, 2, 3, 4, 5];

let arr2 = [6, 7, 8, 9, 10];

let concatArr = arr1.concat(arr2);

concatArr.copyWithin(concatArr.length - 2, 0, 2);

concatArr.fill(0, concatArr.length - 3);

let lastElement = concatArr.pop();

let firstElement = concatArr.push();

concatArr.unshift(10, 20);

function modifyArray(arr1, arr2) {
    let concatArr = arr1.concat(arr2);

    concatArr.copyWithin(concatArr.length - 2, 0, 2);

    concatArr.fill(0, concatArr.length - 3);

    let lastElement = concatArr.pop();

    let firstElement = concatArr.push();

    concatArr.unshift(10, 20);  

    console.log(lastElement);
    console.log(firstElement);
    console.log(concatArr);

}

modifyArray(arr1, arr2);