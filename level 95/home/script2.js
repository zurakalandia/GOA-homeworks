const API_KEY = "5faa8e189a4b974b5f1dd2556054e48f";
const cityName = "lomi";
const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
let div = document.getElementById('div');


async function main() {
    let response = await fetch(API);
    let data = await response.json();

    div.innerHTML += `<p>city name: ${data.name}</p>`;
    div.innerHTML += `<p>id: ${data.id}</p>`;
    div.innerHTML += `<p>temp: ${data.main.temp}</p>`;

}

main();