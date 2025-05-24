function isPositive(n) {
    if(n > 0) {
        return 'Yes';
    } else if(n <= 0) {
        return 'No';
    }
}

let res = isPositive(Number(prompt('num: ')));
console.log(res);