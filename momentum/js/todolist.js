const toDoForm = document.querySelector("#todo-form");
const todoInput = toDoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let toDos = [];
const TODOS_KEY = "todos";
const NO_DRAG_CLASSNAME = "no-drag";
const LINE_THROUGH_CLASSNAME = "line-through";

function deleteToDos(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function successToDos(e) {
  const liText = e.target;
  const toDoObj = localStorage.getItem(TODOS_KEY);
  const newToDoObj = JSON.parse(toDoObj);
  liText.classList.toggle(LINE_THROUGH_CLASSNAME);
  for (toDoIdx in newToDoObj) {
    if (newToDoObj[toDoIdx].id === parseInt(liText.parentElement.id)) {
      newToDoObj[toDoIdx].class.classes = liText.classList.value;
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
  const classes = newToDoObj.class.classes ?? "";
  const classIdx = classes.indexOf(" ");

  const noDrag = classes.substr(0, classIdx);
  const lineThrough = classes.substr(classIdx + 1);

  function addClass(className) {
    span.classList.add(className);
  }

  if (noDrag) {
    addClass(noDrag);
  }
  if (lineThrough) {
    addClass(lineThrough);
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
      classes: NO_DRAG_CLASSNAME,
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
