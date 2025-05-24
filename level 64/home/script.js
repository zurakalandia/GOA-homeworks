function operator(num1, num2) {
    console.log(`${num1} + ${num2} = ${num1 + num2} `);
    console.log(`${num1} - ${num2} = ${num1 - num2} `);
    console.log(`${num1} * ${num2} = ${num1 * num2} `);
    console.log(`${num1} / ${num2} = ${num1 / num2} `);
    console.log(`${num1} ** ${num2} = ${num1 ** num2} `);
    console.log(`${num1} % ${num2} = ${num1 % num2} `);
}

operator(Number(prompt('Num: ')), Number(prompt('Second Num: ')));