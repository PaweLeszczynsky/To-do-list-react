import { StyledExampleTasksButton } from "./styled";
import { fetchExampleTasks } from "../../tasksSlice";
import { useDispatch } from "react-redux";
import { selectExampleTasksStatus } from "../../tasksSlice";
import { useSelector } from "react-redux";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const exampleTasks = useSelector(selectExampleTasksStatus);
    return (
        <StyledExampleTasksButton
            onClick={() => { dispatch(fetchExampleTasks()) }}
            disabled={exampleTasks === "loading"}
        >
            {exampleTasks !== "loading" ? "Pobierz przykładowe zadania" : "Pobieranie zadań ..."}
        </StyledExampleTasksButton>
    );
};
export default ExampleTasksButton