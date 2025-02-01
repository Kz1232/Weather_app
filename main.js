const ApiKey="3e6280c439e6ee09a1f336e444fb3c93";
const ApiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const image_icon = document.querySelector(".img-icon");

const display_app = document.querySelector(".weather");

async function checkWeather(city){
    const response = await fetch(ApiUrl + city + `&appid=${ApiKey}` );
    let data = await response.json();
    
    console.log(data);
    
    document.querySelector(".city_name ").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"; 
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed+ " km/hr"; 


    let weather_info = data.weather[0].main ;
    weather_info = weather_info.toLowerCase();
    if(weather_info === "clouds"){
        image_icon.src = "./Images/cloudy.png";
    }
    else if(weather_info === "snow") {
        image_icon.src = "./Images/snow.png";
    }
    else if(weather_info === "mist") {
        image_icon.src = "./Images/mist.png";
    }
    else if(weather_info === "clear") {
        image_icon.src = "./Images/sun.png";
    }
    else if(weather_info === "thunderstorm") {
        image_icon.src = "./Images/thunderstrom.png";
    }
    else if(weather_info === "rain") {
        image_icon.src = "./Images/rain.png";
    }

    display_app.style.display = "block";

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

searchBox.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        searchBtn.click();
    }
})



