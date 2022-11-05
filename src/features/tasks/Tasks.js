import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import MainContainer from "../../common/MainContainer";
import { useState } from "react";
import { useTasks } from "../../useTasks";

function Tasks() {
  const [hideDone, setHideDone] = useState(false);
  const {tasks, removeTask, toggleTaskDone, setAllTasksDone, addNewTask} = useTasks();

  const toggleHideDone = () => {
    if (tasks.some(({ done }) => done)) {
      setHideDone(hideDone => !hideDone);
    }
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
          />}
      />
      <Section
        title="Lista zadań"
        body={
          <TasksList
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

export default Tasks;
