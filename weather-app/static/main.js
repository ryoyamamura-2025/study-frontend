const weatherForm = document.getElementById("weather-form");
// console.log(weatherForm)
const cityInput = document.getElementById("city-input");
const weatherResults = document.getElementById("weather-results");

weatherForm.addEventListener("submit", (e) => {
    console.log(cityInput.value)
    e.preventDefault();
    getWeather(cityInput.value);
})

const getWeather = (city) => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=ffe74e56c302433f8b9132505252109&q=${city}&aqi=n`)
    .then(response => response.json())
    .then(jsonData => weatherResults.innerHTML = 
        `<div class="results-country">${jsonData.location.country}</div>
        <div class="results-city">${jsonData.location.name}</div>
        <div class="results-temp">${jsonData.current.temp_c} <span>℃</span></div>
        <div class="results-condition">
            <img src=${"https:" + jsonData.current.condition.icon} alt="icon">
            <span>${jsonData.current.condition.text}</span>
        </div>`
    )
};
