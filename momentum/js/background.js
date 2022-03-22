const bgButton = document.querySelector("#bgbtn");
const BACKGROUND = "background";

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

function changeBgImage() {
  const chosenImg = Math.floor(Math.random() * bgImage.length);
  setBgImage(chosenImg);
  localStorage.setItem(BACKGROUND, chosenImg);
}

const savedImg = localStorage.getItem(BACKGROUND);
if (savedImg) {
  setBgImage(savedImg);
} else {
  changeBgImage();
}
bgButton.addEventListener("click", changeBgImage);
