const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const logoutButton = document.querySelector("#logout-btn");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  loginInput.classList.add(HIDDEN_CLASSNAME);
  logoutButton.classList.remove(HIDDEN_CLASSNAME);
  logoutButton.classList.add("btn", "btn-light", "border-0");
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginInput.placeholder = "Write your name here!";
  loginInput.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginSubmit);
} else {
  paintGreeting(savedUsername);
}

function RemoveUsername() {
  localStorage.removeItem(USERNAME_KEY);
  window.location.reload();
}

logoutButton.addEventListener("click", RemoveUsername);
