// API keys
const openWeatherMaApiKey = "ebb88b956bf8c05653e9de0ca2230d40";
const nyTimesApiKey = "uDC9FtINoMvYp08zQbOiSeHxUhancoEb";
// API URLs
const baseUrl = "https://api.openweathermap.org/data/2.5/forecast";
const articleBaseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const cityImagesBaseUrl = "https://api.teleport.org/api/urban_areas";

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

      articles data from:", apiUrl);
fetch(apiUrl)
.then(response => response.json())
.then(data => {
console.log("Articles data received:", data);
displayArticles(data);
})
.catch(error => console.error("Error fetching articles data:", error));
}

// Function to Display Articles
function displayArticles(data) {
const articlesList = data.response.docs.slice(0, 5);

// Display header with the current city name
const cityName = cityInput.value.trim();
const articlesHeader = document.createElement('h3');
articlesHeader.id = 'articles-header';
articlesHeader.textContent = Articles about ${cityName};
rightSidebar.innerHTML = ''; // Clear the rightSidebar content
rightSidebar.appendChild(articlesHeader);

// Display articles
const articlesHTML = articlesList.map(article => {
const articleDate = new Date(article.pub_date);
const articleSnippet = article.snippet;

return `
  <div>
    <p>Date: ${articleDate.toLocaleDateString()}</p>
    <p>Snippet: ${articleSnippet}</p>
  </div>
`;
}).join('');

rightSidebar.innerHTML += articlesHTML;
}

// Function to Add to History
function addToHistory(cityName) {
const listItem = document.createElement('li');
listItem.textContent = cityName;
historyList.appendChild(listItem);
}

// Function to Save to Local Storage
function saveToLocalStorage(cityName) {
let history = JSON.parse(localStorage.getItem('weatherHistory')) || [];
history.push(cityName);
localStorage.setItem('weatherHistory', JSON.stringify(history));
}

// Function to Initialize Local Storage if empty
function initializeLocalStorage() {
const history = JSON.parse(localStorage.getItem('weatherHistory')) || [];
if (!history.length) {
localStorage.setItem('weatherHistory', JSON.stringify([]));
}
}

// Function to Load from Local Storage
function loadFromLocalStorage() {
const history = JSON.parse(localStorage.getItem('weatherHistory')) || [];
history.forEach(city => addToHistory(city));
}

// Load historical data when the page is initially loaded
document.addEventListener("DOMContentLoaded", function () {
initializeLocalStorage();
loadFromLocalStorage();
});



  
