let mixedElements = [true, 3, 'four', 5];

let extendedArray = mixedElements.concat([true, false]);

extendedArray.copyWithin(0, 1, 3);

extendedArray.fill(0, 3);

extendedArray.pop();

extendedArray.shift();

extendedArray.unshift(null, undefined)
