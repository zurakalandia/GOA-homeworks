const API_KEY = "5faa8e189a4b974b5f1dd2556054e48f"
const cityName = "lomi"
const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`

const myWeatherAsyncFunc = async () => {
    const data = await fetch(API)
        .then((response) => response.json());
        
        
        document.body.innerHTML += `city name: ${data.name}<br>
                                    id: ${data.id}<br>
                                    temp: ${data.main.temp}`;
        
        console.log(data.id);
        console.log(data.main.temp)
        console.log(data.wind);
        console.log(data);


}

myWeatherAsyncFunc();


