function isEven(n) {
    if(n % 2 == 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

let res = isEven(Number(prompt('Number: ')));
console.log(res)