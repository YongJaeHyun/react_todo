import { useState } from "react";
import "./ToDoItem.css";

const ToDoItem = ({ id, content, done, deleteToDo, doneToDo, editToDo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(content);
  return (
    <li id="toDoBox">
      <form
        action="submit"
        onSubmit={(e) => {
          e.preventDefault();
          editToDo(id, value);
        }}
      >
        <div id="contentBox">
          <input
            type="text"
            id="content"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            disabled={!isEdit || done} // 수정 모드가 아니거나 취소선 상태일 때는 input 비활성화
            className={done ? "done" : ""}
          />
        </div>
        <div id="buttonBox">
          <button
            id="edit"
            onSubmit={(e) => {
              if (isEdit) {
                e.preventDefault();
                editToDo(id, value);
              }
            }}
            onClick={() => setIsEdit((prev) => !prev)}
          >
            <span class="material-symbols-rounded">edit</span>
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
