function pass(scores) {
    let passed = 0;
    for(let score of scores) {
        if(score >= 70) {
            passed++;
        }
    }
};