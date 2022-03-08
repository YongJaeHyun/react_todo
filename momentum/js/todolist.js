const toDoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function deleteToDos(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerHTML = newToDo.text;
  const button = document.createElement("button");
  button.innerHTML = "❌";
  button.addEventListener("click", deleteToDos);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoList(e) {
  e.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleTodoList);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
