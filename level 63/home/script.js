for(let num = 1; num <= 100; num++) {
    if(num == 50) {
        break;
    }
    if(num % 4 != 0) {
        continue;
    }
    console.log(num);

}