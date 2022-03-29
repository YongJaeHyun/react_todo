const toDoForm = document.querySelector("#todo-form");
const todoInput = toDoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function deleteToDos(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function successToDos(e) {
  const liText = e.target;
  toDoObj = localStorage.getItem(TODOS_KEY);
  newToDoObj = JSON.parse(toDoObj);
  liText.classList.toggle("line-through");
  for (toDoIdx in newToDoObj) {
    if (newToDoObj[toDoIdx].id === parseInt(e.target.parentElement.id)) {
      newToDoObj[toDoIdx].class.class = liText.classList.value;
      Object.assign(toDos, newToDoObj);
      saveToDos();
    }
  }
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  const objClass = newToDoObj.class.class ?? " ";
  if (!objClass) {
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(newToDoObj.id));
    saveToDos();
  }

  function addClass(className) {
    span.classList.add(className);
  }
  const classIdx = objClass.indexOf(" ");
  const no_drag = objClass.substr(0, classIdx);
  const line_through = objClass.substr(classIdx + 1);
  if (no_drag) {
    addClass(no_drag);
  }
  if (line_through) {
    addClass(line_through);
  }
  const button = document.createElement("button");
  button.innerText = "❌";
  button.type = "button";
  button.classList = "liBtn btn btn-outline-danger";
  button.addEventListener("click", deleteToDos);
  span.addEventListener("click", successToDos);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleToDoList(e) {
  e.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
    class: {
      class: "no-drag",
    },
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoList);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
