import { useState } from "react";
import "./ToDoItem.css";

const ToDoItem = ({ id, content, done, deleteToDo, doneToDo, editToDo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(content);

  const editCurrentToDo = (e) => {
    e.preventDefault();
    editToDo(id, value);
  };

  return (
    <li id="toDoBox">
      <form id="toDoForm" action="submit" onSubmit={editCurrentToDo}>
        <div id="contentBox">
          {isEdit ? (
            <input
              type="text"
              id="editInput"
              onChange={(e) => setValue(e.target.value)}
              value={value}
              className={`edit ${done ? "done " : ""}`}
            />
          ) : (
            <textarea
              id="content"
              cols="30"
              rows={Math.ceil(content.length / 16)}
              maxlength="30"
              className={`box ${done ? "done " : ""}`}
              disabled
            >
              {value}
            </textarea>
          )}
        </div>
        <div id="buttonBox">
          <button
            id="edit"
            onSubmit={(e) => {
              if (isEdit) {
                editCurrentToDo(e);
              }
            }}
            onClick={() => (!done ? setIsEdit((prev) => !prev) : undefined)}
          >
            <span className="material-symbols-rounded">edit</span>
          </button>
          <button id="done" onClick={() => doneToDo(id)}>
            <span className="material-symbols-rounded">done</span>
          </button>
          <button id="delete" onClick={() => deleteToDo(id)}>
            <span className="material-symbols-rounded">delete</span>
          </button>
        </div>
      </form>
    </li>
  );
};

export default ToDoItem;
