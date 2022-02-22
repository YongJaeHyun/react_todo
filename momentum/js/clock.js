const clock = document.querySelector("#clock");

function printClock() {
  const date = new Date();
  hours = String(date.getHours()).padStart(2, "0");
  minutes = String(date.getMinutes()).padStart(2, "0");
  seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}
printClock();
setInterval(printClock, 1000);
