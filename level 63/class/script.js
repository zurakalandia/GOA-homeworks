let sum = 1

for(let num = 1; 1 <= 10000; num++) {
    if(sum > 10000) {
        break
    }

    sum *= num
}

console.log(sum)
