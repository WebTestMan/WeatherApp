import "./styles.css";
import getWeatherData from "./getWeatherData";

const message = "Hello World!";

// search box, calls getWeather Data

const weatherSearchBox = document.getElementById("weatherInput");
weatherSearchBox.addEventListener("click", () => {
  getWeatherData;
});

console.log(message);
