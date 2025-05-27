const getGiphy = (function () {
  const gifRod = secrets.GIF_ROD; //"mOlnNSnubcajFdrUrjEEV6GWdSrqIJ0f&s";

  const getGif = async (gifToSearchFor) => {
    const gifData = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${gifRod}=${gifToSearchFor}`,
      { mode: "cors" }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        return response.data.images.original.url;
      });

    return gifData;
  };

  return { getGif };
})();

export default getGiphy;
