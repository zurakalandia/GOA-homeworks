console.log('lomi');

const API_KEY = "5faa8e189a4b974b5f1dd2556054e48f"
const cityName = "lomi"
const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`

fetch(API)
    .then(response => response.json())
    .then(() => console.log('davasrule davit'));
