import { useState } from "react";
import { StyledForm, StyledInput, StyledButton } from "./styled";

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
    <StyledForm
      onSubmit={onFormSubmit}
    >
      <StyledInput
        value={newTaskContent}
        onChange={onInputChange}
        type="text"
        placeholder="Co jest do zrobienia?"
      />
      <StyledButton>Dodaj zadanie</StyledButton>
    </StyledForm>
  )
};

export default Form;