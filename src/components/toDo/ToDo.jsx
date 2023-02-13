import ToDoItem from "../toDoItem/ToDoItem";
import "./ToDo.css";

const ToDo = ({ toDos, deleteToDo }) => {
  return (
    <section id="toDo" className="box">
      <div>
        <ul>
          {toDos.map((toDo) => (
            <ToDoItem
              key={toDo.id}
              id={toDo.id}
              content={toDo.content}
              deleteToDo={deleteToDo}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ToDo;
