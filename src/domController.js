import getWeatherData from "./getWeatherData";

const domController = (function () {
  // update display
  // draw weather div
  // update temp
  // update conditions
  // update img, take in new url as arg

  const weatherDisplayDiv = document.getElementById("weather-display");

  const drawWeatherInput = () => {
    const weatherInputDiv = document.createElement("div");
    weatherInputDiv.setAttribute("id", "weather-input-div");
    const weatherInputForm = document.createElement("form");
    weatherInputForm.setAttribute("id", "weather-Input");
    const weatherInputBox = document.createElement("input");
    const weatherInputBoxAttributesArray = {
      id: "weather-Location",
      name: "weather-Location",
      placeholder: "Please enter a location...",
    };
    for (const property in weatherInputBoxAttributesArray) {
      weatherInputBox.setAttribute(
        property,
        weatherInputBoxAttributesArray[property]
      );
    }
    const weatherButton = document.createElement("button");
    weatherButton.innerText = "Get Weatherly";

    weatherInputForm.appendChild(weatherInputBox);
    weatherInputForm.appendChild(weatherButton);
    weatherInputDiv.appendChild(weatherInputForm);
    weatherDisplayDiv.appendChild(weatherInputDiv);
  };

  const updateWeatherDisplay = (weatherData) => {
    console.log(weatherData);
    weatherDisplayDiv.innerHTML = "";

    const weatherDetails = [];

    const currentConditions = document.createElement("p");
    currentConditions.innerText =
      getWeatherData.getCurrentConditions(weatherData);
    weatherDetails.push(currentConditions);

    const currentTemp = document.createElement("p");
    currentTemp.innerText = getWeatherData.getCurrentTemp(weatherData);
    weatherDetails.push(currentTemp);

    weatherDetails.forEach((detail) => {
      console.log(detail);
      weatherDisplayDiv.appendChild(detail);
    });
  };

  return { drawWeatherInput, updateWeatherDisplay };
})();

export default domController;
