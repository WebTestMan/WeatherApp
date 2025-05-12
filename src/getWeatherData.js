const getWeatherData = (function () {
  // hit api
  // extract data
  // return different bits of data
  const weatherRod = "WKCG34RNMQGB6SNVKC9BQEB9M";

  const getWeather = (location = "London") => {
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=uk&key=${weatherRod}`
    ).then((response) => {
      console.log(response.json());
    });
  };
  return { getWeather };
})();

export default getWeatherData;
