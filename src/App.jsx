import { useEffect, useState } from "react";
import "./App.css";
import EmptyToDos from "./components/emptyToDos/EmptyToDos";
import Header from "./components/header/Header";
import ToDo from "./components/toDo/ToDo";
import UserInput from "./components/userInput/UserInput";

function App() {
  const [toDos, setToDos] = useState([]);
  const [value, setValue] = useState("");

  const addToDo = (value) => {
    const newToDos = [...toDos, { id: Date.now(), content: value }];
    setToDos(newToDos);
    localStorage.setItem("toDos", JSON.stringify(newToDos));
  };

  const deleteToDo = (id) => {
    const filteredToDo = toDos.filter((todo) => todo.id !== id);
    setToDos(filteredToDo);
    localStorage.setItem("toDos", JSON.stringify(filteredToDo));
  };

  useEffect(() => {
    const storedToDos = JSON.parse(localStorage.getItem("toDos")) || [];
    setToDos(storedToDos);
  }, []);

  return (
    <main id="container">
      <Header />
      {toDos.length === 0 ? (
        <EmptyToDos />
      ) : (
        <ToDo toDos={toDos} deleteToDo={deleteToDo} />
      )}
      <UserInput value={value} setValue={setValue} addToDo={addToDo} />
    </main>
  );
}

export default App;
