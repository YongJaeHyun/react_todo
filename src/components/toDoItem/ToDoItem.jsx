import "./ToDoItem.css";

const ToDoItem = ({ id, content, done, deleteToDo, doneToDo }) => {
  return (
    <li id="toDoBox">
      <div id="contentBox">
        <span id="content" className={done ? 'done' : ''}>{content}</span>
      </div>
      <div id="buttonBox">
        <button id="done" onClick={() => doneToDo(id)}>
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
