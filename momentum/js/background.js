const changeBgButton = document.querySelector("#change-background-btn");
const prevBgButton = document.querySelector("#prev-background-btn")
const BACKGROUND = "background";

let prevBgImage = []
const bgImage = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];

const chosenImg = Math.floor(Math.random() * bgImage.length);

const bgMain = document.body.style;

function setBgImage(img) {
  bgMain.backgroundImage = `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("img/${img}.jpg")`;
}

function changeBgImage(e) {
  e.preventDefault()
  const changedImg = Math.floor(Math.random() * bgImage.length);
  setBgImage(changedImg);
  prevBgImage.push(changedImg)
  console.log(prevBgImage)
  localStorage.setItem(BACKGROUND, changedImg);
}

function backBgImage(e) {
  e.preventDefault()
  const isSame = prevBgImage == prevBgImage.slice(0,-1)
  const prevBgImage2 = isSame ? prevBgImage : prevBgImage.slice(0,-1)
  const changedImg = prevBgImage2.pop()
  setBgImage(changedImg)
  console.log(prevBgImage2)
  localStorage.setItem(BACKGROUND, changedImg)
}

const savedImg = localStorage.getItem(BACKGROUND);
if (savedImg) {
  setBgImage(savedImg);
  prevBgImage.push(savedImg)
  console.log(prevBgImage)
} else {
  changeBgImage();
}
changeBgButton.addEventListener("click", changeBgImage);
prevBgButton.addEventListener("click", backBgImage)