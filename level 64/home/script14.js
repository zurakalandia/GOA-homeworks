function isShort(text) {
    switch(true) {
        case text.length < 5:
            return 'Short';
        case text.length >= 5:
            return 'Long';
    };
};

let res = isShort(prompt('Text: '));
console.log(res);