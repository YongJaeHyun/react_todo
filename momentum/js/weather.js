const position = document.getElementById("position");
const temp = document.getElementById("temp");
const weatherIcon = document.getElementById("weathericon");
navigator.geolocation.getCurrentPosition(
  successCallBack,
  errorCallBack,
  position
);

const API_KEY = "cefb292cb71b2b8e528af2352492235b";

function successCallBack(locationValue) {
  const lat = locationValue.coords.latitude;
  const lon = locationValue.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      position.innerText = `${data.sys.country}, ${data.name} is now...`;
      weatherIcon.src =
        "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      temp.innerText = `${data.weather[0].main}`;
    });
}
function errorCallBack() {
  console.log("Error!");
}
