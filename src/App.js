import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import MainContainer from "./MainContainer";
import { useState } from "react";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "Przejść na reacta", done: false },
    { id: 2, content: "Zrobić trening", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      };
      return task;
    }));
  };

  const setAllTasksDone = () => {
    setTasks(tasks => tasks.map(task => (
      {
        ...task, done: true,
      }
    )));
  };

  const addNewTask = (newTaskContent) => {
    setTasks(tasks =>
      [...tasks,
      {
        content: newTaskContent,
        status: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      }
      ]);
  };

  const focusTaskInput = (event) => {
    event.target[0].focus();
  };

  return (
    <MainContainer>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={
          <Form
            addNewTask={addNewTask}
            focusTaskInput={focusTaskInput}
          />}
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllTasksDone={setAllTasksDone}
          />}
      />
    </MainContainer>
  );
}

export default App;
