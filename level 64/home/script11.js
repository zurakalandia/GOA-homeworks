function hasA(word) {
    for(let char = 0; char < word.length; char++ ) {
        if(word[char] == 'a' || word[char] == 'A') {
            return `${word} has an the letter "A" in it`;
        } else {
            return `${word} doesn't have the letter "A" in it`;
        }
    }
}

let res = hasA(prompt('Word: '));
console.log(res);