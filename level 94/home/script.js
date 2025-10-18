//1

function hello() {
    console.log('Hello');
}

function world() {
    console.log('World');
}

hello();
world();

//2

function async1() {
    setTimeout(() => {
        console.log('First async done');
    }, 2000);
}

function async2() {
    setTimeout(() => {
        console.log('Second async done');
    }, 1000);
}

async1();
async2();

//3

console.log('Start program');

async1();
async2();

console.log('End program');

//4

function async3() {
    setTimeout(() => {
        console.log('Third async done');
    }, 500);
}

function async4() {
    setTimeout(() => {
        console.log('Fourth async done');
    }, 1500);
}

function async5() {
    setTimeout(() => {
        console.log('Fifth async done');
    }, 2000);
}

async3();
async4();
async5();

//5

function simulation() {
    console.log('User logged in');

    setTimeout(() => console.log('Fetching data...'), 2000);

    setTimeout(() => console.log('Data recieved'), 1000);
}




