import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import MainContainer from "./MainContainer";
import { useState } from "react";
const tasks = [
  { id: 1, content: "Przejść na reacta", status: false },
  { id: 2, content: "Zrobić trening", status: true },
];
function App() {
  const [hideDone, setHideDone] = useState(false);
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };
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
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />}
      />
    </MainContainer>
  );
}

export default App;
