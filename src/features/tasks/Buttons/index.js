import { StyledContainer, StyledInteractionButton, StyledExampleTasksButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
    toggleHideDone, setAllTasksDone, selectIsEveryTaskDone,
    selectHideDone, selectAreTasksEmpty, fetchExampleTasks
} from "../tasksSlice";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const allTasksDone = useSelector(selectIsEveryTaskDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const dispatch = useDispatch();

    // if (areTasksEmpty) {
    //     return null;
    // };

    return (
        <StyledContainer>
            <StyledExampleTasksButton
                onClick={() => { dispatch(fetchExampleTasks()) }}>
                Pobierz przykładowe zadania
            </StyledExampleTasksButton>
            <StyledInteractionButton
                onClick={() => { dispatch(toggleHideDone()) }}
                areTasksEmpty={areTasksEmpty}
            >
                {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
            </StyledInteractionButton>
            <StyledInteractionButton
                onClick={() => { dispatch(setAllTasksDone()) }}
                areTasksEmpty={areTasksEmpty}
                disabled={allTasksDone}
            >
                Ukończ wszystkie
            </StyledInteractionButton>
        </StyledContainer>)
};

export default Buttons;