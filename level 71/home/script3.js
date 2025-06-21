let arr1 = [0, 1, 2, 3, 4];

let arr2 = [5, 6, 7, 8];

let arr3 = [9, 'hello', 'hi', 'friend'];

let mergedArray = arr1.concat(arr2);

mergedArray.copyWithin(5, 0, 3);

mergedArray.fill(0, 6);

mergedArray.pop();

mergedArray.shift();

mergedArray.unshift(100, 200);

mergedArray.splice(2, 2, ...arr3);

let slicedArray = mergedArray.slice(-5);

slicedArray.join(', ');

function comprehensiveArrayTask(arr1, arr2, arr3) {
    let arr1 = [0, 1, 2, 3, 4];

    let arr2 = [5, 6, 7, 8];

    let arr3 = [9, 'hello', 'hi', 'friend'];

    let mergedArray = arr1.concat(arr2);

    mergedArray.copyWithin(5, 0, 3);

    mergedArray.fill(0, 6);

    mergedArray.pop();

    mergedArray.shift();

    mergedArray.unshift(100, 200);

    mergedArray.splice(2, 2, ...arr3);

    let slicedArray = mergedArray.slice(-5);

    return slicedArray.join(', ');

};
