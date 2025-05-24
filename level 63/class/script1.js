let num = 1;

while(num <= 200) {
    if(num === 105) {
        break;
    }
    if(num % 3 === 0) {
        num++
        continue;
    }
    console.log(num);
    num++;
}