import "./styles.css";
import getWeatherData from "./getWeatherData";
// import getGiphy from "./getGiphy";
import domController from "./domController";

// search box, calls getWeather Data

// const weatherDisplayDiv = document.getElementById("weather-input-div");
// const weatherGif = document.createElement("img");
// const imgURL = await getGiphy.getGif("dog");
// weatherGif.setAttribute("src", imgURL);
// weatherDisplayDiv.appendChild(weatherGif);

domController.drawWeatherInput();

const weatherSearchLocationForm = document.getElementById("weather-Input");

weatherSearchLocationForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const weatherLocation = document.getElementById("weather-Location").value;
  // console.log(weatherLocation);
  const weatherData = await getWeatherData.getWeather(weatherLocation);
  // console.log(weatherData);
  domController.updateWeatherDisplay(weatherData);
});
