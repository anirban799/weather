
const API_KEY = "02be57173d8f9f3dd0b12abcaec493f8";

let temp = document.querySelector(".temp");
let cityElement = document.querySelector(".city"); 
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let cImg=document.querySelector(".weather-icon");

async function weatherApi(city) {
    try {
        let resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        
     let jsData = await resp.json();
  
     if(jsData.cod == 404){
        document.querySelector(".error").style.display="block";
    }
 if(jsData.cod == 400){
    document.querySelector(".blank").style.display="block";
 }

       
        temp.innerHTML = Math.round(jsData.main.temp) + "°C";
        humidity.innerHTML = jsData.main.humidity + "%";
        cityElement.innerHTML = jsData.name;
        wind.innerHTML = jsData.wind.speed + " km/h"; 

        const weatherImages = {
            "Clouds": "image/clouds.png",
            "Drizzle": "image/drizzle.png",
            "Mist": "image/mist.png",
            "Snow": "image/snow.png",
            "Clear": "image/clear.png",
            "Rain": "image/rain.png"
        };

        const weatherMain = jsData.weather[0].main;
        cImg.src = weatherImages[weatherMain] 
document.querySelector(".weather").style.display="block";


    } catch (e) {
        console.log(e);
    }
}
let inputBox = document.querySelector("input");
let srcBtn = document.querySelector("button");

srcBtn.addEventListener("click", () => {
    weatherApi(inputBox.value);
});

