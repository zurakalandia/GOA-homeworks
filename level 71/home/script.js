let numsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let strArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

let combinedArray = numsArray.concat(strArray);

combinedArray.copyWithin(4, 0, 3);

combinedArray.fill('filled', 2, 4);

combinedArray.pop();

combinedArray.shift();

combinedArray.unshift(100, 200);

function modifyArray(numsArray, strArray) {
    let numsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    let strArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

    let combinedArray = numsArray.concat(strArray);

    combinedArray.copyWithin(4, 0, 3);

    combinedArray.fill('filled', 2, 4);

    combinedArray.pop();

    combinedArray.shift();

    combinedArray.unshift(100, 200);
};