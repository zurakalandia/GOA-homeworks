let num = Number(prompt('NUmber: '));

if(num % 15 === 0) {
    console.log('FizzBuzz');
} else if(num % 3 === 0) {
    console.log('Fizz');
} else if(num % 5 === 0) {
    console.log('Buzz');
} else {
    console.log(num);
}

//------------

let res = num % 15 === 0 ? console.log('FizzBuzz') :
num % 3 === 0 ? 'Fizz' :
num % 5 === 0 ? 'Buzz' :
num;

console.log(res);

//---------------

switch(true) {
    case num % 15 === 0:
        console.log('FizzBuzz');
        break;
    case num % 3 === 0:
        console.log('Fizz');
        break;
    case num % 5 === 0:
        console.log('Buzz');
        break;
    default:
        console.log(num)
    
}




