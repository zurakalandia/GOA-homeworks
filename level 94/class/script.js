function hello() {
    console.log('Hello');
}

function world() {
    console.log('World');
}

hello();
world();

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