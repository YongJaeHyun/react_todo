const changeBgButton = document.querySelector("#change-background-btn");
const prevBgButton = document.querySelector("#prev-background-btn");
const BACKGROUND = "background";

let prevBgImage = [];
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
  bgMain.backgroundImage = `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("img/background/${img}.jpg")`;
}

function changeBgImage(e) {
  e.preventDefault();
  const savedImg = localStorage.getItem(BACKGROUND);
  prevBgImage.push(savedImg);
  const changedImg = Math.floor(Math.random() * bgImage.length);
  setBgImage(changedImg);
  localStorage.setItem(BACKGROUND, changedImg);
}

function backBgImage() {
  if (prevBgImage.length === 0) {
    alert("처음 배경입니다!");
  } else {
    let changedImg = prevBgImage.pop();
    setBgImage(changedImg);
    localStorage.setItem(BACKGROUND, changedImg);
  }
}

const savedImg = localStorage.getItem(BACKGROUND);
if (savedImg) {
  setBgImage(savedImg);
} else {
  changeBgImage();
}
changeBgButton.addEventListener("click", changeBgImage);
prevBgButton.addEventListener("click", backBgImage);
