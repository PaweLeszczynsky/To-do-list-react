import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask, focusTaskInput }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const onInputChange = ({ target }) => { setNewTaskContent(target.value); };
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() !== "") {
      addNewTask(newTaskContent.trim());
    }
    setNewTaskContent("");
    focusTaskInput(event);
  };
  return (
    <form
      className="addTaskForm"
      onSubmit={onFormSubmit}
    >
      <input
        value={newTaskContent}
        onChange={onInputChange}
        className="addTaskForm__addTaskInput"
        type="text"
        placeholder="Co jest do zrobienia?"
      />
      <button className="addTaskForm__addTaskButton">Dodaj zadanie</button>
    </form>
  )
};

export default Form;