console.log('lomi'); //first

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json)) //fourth
    console.log('vefxvi'); //second

console.log('lomi'); //third