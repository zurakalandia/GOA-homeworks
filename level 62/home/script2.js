let num = Number(prompt('Num: '));


while(num >= 0) {
    if(num > 1) {
        console.log(`${num} seconds left`);
    } else if(num === 1) {
        console.log(`${num} second left`);
    }  else {
        console.log('0 Seconds left')
    }
    num--;
}