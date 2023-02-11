import MainContainer from "../../../common/MainContainer";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Form from "../TasksPage/Form";
import ExampleTasksButton from "../TasksPage/exampleTasksButton";
import TasksList from "../TasksPage/TasksList";
import Buttons from "../TasksPage/Buttons";
import Search from "./Search";

function TasksPage() {

  return (
    <MainContainer>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<ExampleTasksButton />}
      />
      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />
      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </MainContainer>
  );
}

export default TasksPage;
