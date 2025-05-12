import "./styles.css";
import getWeatherData from "./getWeatherData";
import getGiphy from "./getGiphy";

// search box, calls getWeather Data

const weatherDisplayDiv = document.getElementById("weather-input-div");
const weatherGif = document.createElement("img");
const imgURL = getGiphy.getGif("dog");
weatherGif.setAttribute("src", imgURL);
weatherDisplayDiv.appendChild(weatherGif);

const weatherSearchLocation = document.getElementById("weather-Input");
weatherSearchLocation.addEventListener("submit", () => {
  const weatherLocation = document.getElementById("weather-Location").value;
  console.log(weatherLocation);
  const weatherData = getWeatherData.getWeather(weatherLocation);
  console.log(weatherData);
});

 const weatherData = getWeatherData.getWeather('London');
 console.log(weatherData);
