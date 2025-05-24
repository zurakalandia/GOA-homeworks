for(let i = 1; i <= 30; i++) {
    if(i % 2 != 0) {
        continue;
    }
    console.log(i);
    if(i % 8 == 0) {
        break;
    }
}