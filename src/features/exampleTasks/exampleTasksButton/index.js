import { StyledExampleTasksButton } from "./styled";
import { fetchExampleTasks } from "../../tasks/tasksSlice";
import { useDispatch } from "react-redux";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    return (
        <StyledExampleTasksButton
            onClick={() => { dispatch(fetchExampleTasks()) }}>
            Pobierz przykładowe zadania
        </StyledExampleTasksButton>
        )
}
export default ExampleTasksButton