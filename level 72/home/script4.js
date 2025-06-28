function math(n) {
    let randomNums = [];
    let sum = 0;
    for(i = 0; i < n; i++) {
        let num = Math.random()
        randomNums.push(num);
        sum += num;
    }

    let answer = sum / randomNums.length;
    return answer;
};