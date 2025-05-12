const getGiphy = (function () {
  const getGif = (gifToSearchFor) => {
    //   const img = document.querySelector('img');
    fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=mOlnNSnubcajFdrUrjEEV6GWdSrqIJ0f&s=${gifToSearchFor}`,
      { mode: "cors" }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response.data.images.original.url);
        return response.data.images.original.url;
      });
  };
  return { getGif };
})();

export default getGiphy;
