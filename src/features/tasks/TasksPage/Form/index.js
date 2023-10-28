import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../../tasksSlice";
import { StyledForm, StyledButton } from "./styled";
import { StyledInput } from "../../Input/styled";

const Form = () => {
  const dispatch = useDispatch();
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onInputChange = ({ target }) => { setNewTaskContent(target.value); };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() !== "") {
      dispatch(addTask({
        content: newTaskContent.trim(),
        done: false,
        id: nanoid(),
      }));
    };
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