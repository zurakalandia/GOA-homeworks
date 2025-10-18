//1

let map = new Map([['k1', 'v1'], ['k2', 'v2'], ['k3', 'v3'], ['k4', 'v4'], ['k5', 'v5']]);

let size = map.size;

for(let entry of map.entries()) {
    console.log(entry);
}

console.log(map.has('k6')); //false

//2

let set = new Set(1, 1, 2, 1, 2, 3, 2, 1, 3, 2, 3, 1);

cnonsole.log(set);