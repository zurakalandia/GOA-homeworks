function sameLastDigit(a, b) {
    if(a[a.length - 1] == b[b.length - 1]) {
        return 'Same';
    } else {
        return 'Different';
    }
}

let res = sameLastDigit(prompt('First word: '), prompt('Second word'));

console.log(res);

