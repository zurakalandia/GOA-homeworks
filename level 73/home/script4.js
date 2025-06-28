function clock() {
    let now = new Date().toLocaleTimeString();
    console.log(now);
};

setInterval(clock, 1000);