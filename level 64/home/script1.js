

function lotsOfStuff(num1, num2, word, char, factorial, name, lname) {
    console.log(`${num1} + ${num2} = ${num1 + num2} `);
    console.log(`${num1} - ${num2} = ${num1 - num2} `);
    console.log(`${num1} * ${num2} = ${num1 * num2} `);
    console.log(`${num1} / ${num2} = ${num1 / num2} `);
    console.log(`${num1} ** ${num2} = ${num1 ** num2} `);
    console.log(`${num1} % ${num2} = ${num1 % num2} `);



    let found = false
    for(let i = 0; i < word.length; i++) {
        if(char == word[i]) {
            found = true;
            break;
        }
    }
    if(found == true) {
            console.log(`${char} is in ${word}`);
        } else {
            console.log(`${char} isn't in ${word}`);
        }
    


    let sum = 1;
    while(0 < factorial) {
        sum *= factorial;
        factorial--;
    }

    console.log(sum);



    console.log(`Hello ${name} ${lname}`)
}

lotsOfStuff(Number(prompt('First number: ')), Number(prompt('Second number: ')), prompt('Word: '), prompt('Character to find in the word'), prompt('Number to find factorial of: '), prompt('Name: '), prompt('Last name: '))