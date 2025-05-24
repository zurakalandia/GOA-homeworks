function numberSign(n) {
    switch(true) {
        case n > 0:
            return 'Positive';
        case n < 0:
            return 'Negative';
        default:
            return 'zero';
    }
}

let res = numberSign(Number(prompt('Number: ')));
console.log(res);