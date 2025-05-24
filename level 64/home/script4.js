function repeatString(str, times) {
    return str.repeat(times);
}

let res = repeatString(prompt('String: '), Number(prompt('Num: ')));
console.log(res);