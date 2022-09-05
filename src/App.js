import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import MainContainer from "./MainContainer";
const tasks = [
  { id: 1, content: "Przejść na reacta", status: false },
  { id: 2, content: "Zrobić trening", status: true },
];
const hideDone = false;
function App() {
  return (
    <MainContainer>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} />}
      />
    </MainContainer>
  );
}

export default App;
