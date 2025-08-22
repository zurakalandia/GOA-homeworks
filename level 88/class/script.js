let arr = [1, 2];

let [x, y] = arr;

[x, y] = [y, x] //swapping [1, 2] => [2, 1]

let nestedArr = [1, 2, 3, [4, 5]];

let [a, b, c, [d, e]] = nestedArr; //unpacking a nested arr