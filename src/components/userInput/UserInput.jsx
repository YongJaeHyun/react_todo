import "./UserInput.css";

const UserInput = ({ value, setValue, addToDo }) => {
  return (
    <section id="userInput">
      <form
        id="userInputForm"
        action="submit"
        onSubmit={(e) => {
          e.preventDefault();
          addToDo(value);
          setValue("");
        }}
      >
        <input
          id="toDo_input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="오늘의 할 일을 적어주세요!"
          autoComplete="off"
          minLength={2}
          maxLength={30}
        />
      </form>
    </section>
  );
};

export default UserInput;
