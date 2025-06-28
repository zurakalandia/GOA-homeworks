list = [
    () => console.log("First message"),
    () => console.log("Second message"),
    () => console.log("Third message")
];

function runFuncs() {
    for(let i = 0; i < list.length; i++) {
        setTimeout(list[i], 1000 * i);
    };
};
