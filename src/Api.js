import axios from "axios";


export function getWeather() {
  get("weatherforecast")
}

function get(url) {
    axios.get(`https://cloudssp-jbe-backend.azurewebsites.net/` + url)
      .then(res => {
        const weatherData = res.data;
        localStorage.setItem("weather", JSON.stringify(weatherData));
      });
}