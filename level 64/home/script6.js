function toFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

let res = toFahrenheit(Number(prompt('Temperature in Celsius: ')));
console.log(res);
