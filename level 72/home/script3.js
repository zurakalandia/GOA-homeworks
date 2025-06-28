function fizzBuzz(num) {
    let answer = []
    if(num % 15 === 0) {
        answer.push('FizzBuzz');
    } else if(num % 3 === 0) {
        answer.push('Fizz');
    } else if(num % 5 === 0) {
        answer.push('Buzz');
    }
    
    return answer
};