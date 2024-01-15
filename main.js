// API keys
const openWeatherMapApiKey = "ebb88b956bf8c05653e9de0ca2230d40";
const nyTimesApiKey = "uDC9FtINoMvYp08zQbOiSeHxUhancoEb";

// API URLs
const baseUrl = "https://api.openweathermap.org/data/2.5/forecast";
const articleBaseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

// Rest of your JavaScript code goes here


$(document).ready(function() {
  const cityInput = $('#city-input');
  const searchButton = $('#search-button');
  const cityDisplayContainer = $('#city-display-container');
  const articlesList = $('#articles-list');
  const cityImagesContainer = $('#city-images-container');

  searchButton.on('click', function() {
    const cityName = cityInput.val().trim();
    if (cityName !== '') {
      const weatherApiUrl = `${baseUrl}?q=${cityName}&appid=${openWeatherMapApiKey}`;
      const articlesApiUrl = `${articleBaseUrl}?api-key=${nyTimesApiKey}&q=${cityName}`;
      const cityImagesApiUrl = `${cityImagesBaseUrl}/${cityName.toLowerCase()}/images/`;

      // Fetch and display weather data
      fetchWeatherData(weatherApiUrl);

      // Fetch and display articles
      fetchArticlesData(articlesApiUrl);

      // Fetch and display city images
      fetchCityImages(cityImagesApiUrl);
    } else {
      alert('Please enter a city name.');
    }
  });

  function fetchWeatherData(apiUrl) {
    // Implement fetching and displaying weather data here
    // Update cityDisplayContainer with the fetched data
  }

  function fetchArticlesData(apiUrl) {
    // Implement fetching and displaying articles here
    // Update articlesList with the fetched data
  }

  function fetchCityImages(apiUrl) {
    // Implement fetching and displaying city images here
    // Update cityImagesContainer with the fetched data
  }
});

