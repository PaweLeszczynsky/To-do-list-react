import { useRef, useState } from "react";
import { StyledForm, StyledInput, StyledButton } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onInputChange = ({ target }) => { setNewTaskContent(target.value); };
  
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() !== "") {
      addNewTask(newTaskContent.trim());
    }
    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <StyledForm
      onSubmit={onFormSubmit}
    >
      <StyledInput
        ref={inputRef}
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