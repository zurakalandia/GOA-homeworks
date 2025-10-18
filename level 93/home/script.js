let map = new Map([['k1', 'v1'], ['k2', 'v2'], ['k3', 'v3'], ['k4', 'v4'], ['k5', 'v5']]);
let size = map.size;

for(let entry of map.entries()) {
    console.log(entry[0]);
    console.log(entry[1]);
}

console.log(map.has('k6'));

let array = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3];

let set = new Set(array);