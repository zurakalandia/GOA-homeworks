function isAdult(age) {
    if(age > 18) {
        return 'Adult';
    } else {
        return 'Minor';
    }
}

let res = isAdult(Number(prompt('Age: ')));
console.log(res);