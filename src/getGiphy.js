const getGiphy = (function () {
  const gifRod = "mOlnNSnubcajFdrUrjEEV6GWdSrqIJ0f&s";

  const getGif = async (gifToSearchFor) => {
    const gifData = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${gifRod}=${gifToSearchFor}`,
      { mode: "cors" }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        const imgSrc = response.data.images.original.url;
        console.log(imgSrc);
        return imgSrc;
      });

    console.log("Gif Data " + gifData);
    return gifData;
  };

  return { getGif };
})();

export default getGiphy;
