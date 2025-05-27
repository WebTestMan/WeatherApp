const getWeatherData = (function () {
  const weatherRod = secrets.WEATHER_ROD;

  const getWeather = async (location = "London") => {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=uk&key=${weatherRod}&contentType=json`
    );
    const weatherData = await response.json();
    const weatherInfo = weatherData.days[0];
    return weatherInfo;
  };

  const getCurrentTemp = (weatherData) => {
    const currentTemp = weatherData.temp;
    console.log(currentTemp);
    return currentTemp;
  };

  const getCurrentConditions = (weatherData) => {
    const currentConditions = weatherData.conditions;
    console.log(currentConditions);
    return currentConditions;
  };

  return { getWeather, getCurrentTemp, getCurrentConditions };
})();

export default getWeatherData;
