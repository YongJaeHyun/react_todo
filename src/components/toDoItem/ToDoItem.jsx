import "./ToDoItem.css";

const ToDoItem = ({ id, content, deleteToDo }) => {
  const doneToDo = (e) => {
    const text = e.target.parentElement.parentElement.parentElement.children[0];
    text.classList.toggle("done");
  };
  return (
    <li id="toDoBox">
      <div id="contentBox">
        <span id="content">{content}</span>
      </div>
      <div id="buttonBox">
        <button id="done" onClick={doneToDo}>
          <span className="material-symbols-rounded">done</span>
        </button>
        <button id="delete" onClick={() => deleteToDo(id)}>
          <span className="material-symbols-rounded">delete</span>
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
