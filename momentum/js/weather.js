const position = document.getElementById("position");
const weatherText = document.getElementById("weathertext");
const weatherIcon = document.getElementById("weathericon");
navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);

const API_KEY = "cefb292cb71b2b8e528af2352492235b";

function successCallBack(location) {
  const lat = location.coords.latitude;
  const lon = location.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      position.innerText = `${data.sys.country}, ${
        data.name
      } is now... ${data.main.temp.toFixed([1])}℃`;
      weatherIcon.src =
        "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      weatherText.innerText = `${data.weather[0].main}`;
    });
}
function errorCallBack() {
  console.log("Error!");
}
