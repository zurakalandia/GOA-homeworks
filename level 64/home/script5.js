function longerWord(word1, word2) {
    if(word1.length > word2.length) {
        return `${word1} has more characters`;
    } else if(word1.length < word2.length) {
        return `${word2} has more characters`;
    } else {
        return 'equal';
    }
}

let res = longerWord(prompt('first word: '), prompt('second word: '));
console.log(res)