function evenOrOdd(n) {
    switch(true) {
        case n % 2 == 0:
            return 'Even';
        case n % 2 != 0:
            return 'Odd';
    }
}

res = evenOrOdd(Number(prompt('Number: ')));
console.log(res);

