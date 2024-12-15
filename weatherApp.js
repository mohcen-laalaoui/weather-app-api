<<<<<<< HEAD
<<<<<<< HEAD
const apiKey = "your_api_key";
=======
const apiKey = "65002ac8d73f4e2c231b9c997466e9d2";
>>>>>>> b672cd2 (Updated UI layout and styling for improved responsiveness and alignment.)
=======
const apiKey = "your api key";
>>>>>>> 317aff3 (Updated UI layout and styling for improved responsiveness and alignment.)
const weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather";
const forecastApiUrl = "https://api.openweathermap.org/data/2.5/forecast";

function fetchWeather(city) {
  const url = `${weatherApiUrl}?q=${city}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
<<<<<<< HEAD

=======
>>>>>>> b672cd2 (Updated UI layout and styling for improved responsiveness and alignment.)
      document.getElementById("city").textContent = data.name;
      document.getElementById("weather-description").textContent =
        data.weather[0].description;
      document.getElementById(
        "temperature"
      ).textContent = `Temperature: ${data.main.temp}°C`;
      document.getElementById(
        "humidity"
      ).textContent = `Humidity: ${data.main.humidity}%`;
      document.getElementById(
        "wind-speed"
      ).textContent = `Wind Speed: ${data.wind.speed} km/h`;

      const iconCode = data.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
      document.getElementById("weather-icon").src = iconUrl;
    })
    .catch((error) => alert("Error fetching weather data."));
}

function fetchForecast(city) {
  const url = `${forecastApiUrl}?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
<<<<<<< HEAD
      console.log("Forecast data:", data); 

      if (data.list && data.list.length > 0) {
        const tempData = data.list.slice(0, 8).map((item) => item.main.temp); 
        const labels = data.list.slice(0, 8).map((item) => {
          const time = new Date(item.dt * 1000).getHours(); 
=======
      console.log("Forecast data:", data);
      if (data.list && data.list.length > 0) {
        const tempData = data.list.slice(0, 8).map((item) => item.main.temp);
        const labels = data.list.slice(0, 8).map((item) => {
          const time = new Date(item.dt * 1000).getHours();
>>>>>>> b672cd2 (Updated UI layout and styling for improved responsiveness and alignment.)
          return `${time}:00`;
        });

        drawChart(tempData, labels);
      } else {
        console.error("No forecast data available.");
        alert("No forecast data available.");
      }
    })
    .catch((error) => {
<<<<<<< HEAD
      console.error("Error fetching forecast data:", error); 
=======
      console.error("Error fetching forecast data:", error);
>>>>>>> b672cd2 (Updated UI layout and styling for improved responsiveness and alignment.)
      alert("Error fetching forecast data.");
    });
}

function drawChart(tempData, labels) {
  const ctx = document.getElementById("weatherChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Temperature (°C)",
          data: tempData,
<<<<<<< HEAD
          borderColor: "rgba(75, 192, 192, 1)",
=======
          borderColor: "rgb(243, 0, 0)",
>>>>>>> b672cd2 (Updated UI layout and styling for improved responsiveness and alignment.)
          borderWidth: 2,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          title: { display: true, text: "Time" },
        },
        y: {
          title: { display: true, text: "Temperature (°C)" },
        },
      },
    },
  });
}

document.getElementById("search-btn").addEventListener("click", () => {
  const city = document.getElementById("city-input").value;
  fetchWeather(city);
  fetchForecast(city);
});

<<<<<<< HEAD
=======
document.getElementById("location-btn").addEventListener("click", () => {
  fetchWeatherByLocation();
  fetchForecastByLocation();
});

>>>>>>> b672cd2 (Updated UI layout and styling for improved responsiveness and alignment.)
function fetchWeatherByLocation() {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const urlWeather = `${weatherApiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const urlForecast = `${forecastApiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(urlWeather)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("city").textContent = data.name;
        document.getElementById("weather-description").textContent =
          data.weather[0].description;
        document.getElementById(
          "temperature"
        ).textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById(
          "humidity"
        ).textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById(
          "wind-speed"
        ).textContent = `Wind Speed: ${data.wind.speed} km/h`;

        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
        document.getElementById("weather-icon").src = iconUrl;
      });

    fetch(urlForecast)
      .then((response) => response.json())
      .then((data) => {
        const tempData = data.list.slice(0, 8).map((item) => item.main.temp);
        const labels = data.list.slice(0, 8).map((item) => {
          const time = new Date(item.dt * 1000).getHours();
          return `${time}:00`;
        });

        drawChart(tempData, labels);
      });
  });
}

<<<<<<< HEAD
fetchWeatherByLocation();
=======
function fetchForecastByLocation() {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    fetchForecastByCoordinates(lat, lon);
  });
}

function fetchForecastByCoordinates(lat, lon) {
  const url = `${forecastApiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.list && data.list.length > 0) {
        const tempData = data.list.slice(0, 8).map((item) => item.main.temp);
        const labels = data.list.slice(0, 8).map((item) => {
          const time = new Date(item.dt * 1000).getHours();
          return `${time}:00`;
        });

        drawChart(tempData, labels);
      } else {
        alert("No forecast data available.");
      }
    })
    .catch((error) => {
      console.error("Error fetching forecast data:", error);
      alert("Error fetching forecast data.");
    });
}
>>>>>>> b672cd2 (Updated UI layout and styling for improved responsiveness and alignment.)
