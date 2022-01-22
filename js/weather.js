import API_KEY from "./apikey.js";
console.log(API_KEY);
function onGeoOk(position) {
  const lat = position.coords.latitude; //위도
  const lon = position.coords.longitude; // 경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      const temp = String(Math.round(data.main.temp));
      city.innerText = data.name;
      weather.innerText = `${temp}˚C\u00a0\u00a0${data.weather[0].main}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weathre for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
