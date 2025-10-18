let button = document.getElementById('fetch');
let div = document.getElementById('div');
const API_KEY = "5faa8e189a4b974b5f1dd2556054e48f"
const cityName = "lomi"
const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`

async function main() {
    let response = await fetch(API);
    let data = await response.json();

    div.innerHTML = `<ul>
                        <li>city name: ${data.name}</li>
                        <li>id: ${data.id}</li>
                        <li>temp: ${data.main.temp}</li>
                    </ul>`;
    console.log('info fetched and added successfully');
}

button.addEventListener('click', main);