import { StyledContainer, StyledInteractionButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
    toggleHideDone, setAllTasksDone, selectIsEveryTaskDone,
    selectHideDone, selectAreTasksEmpty
} from "../../tasksSlice";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const allTasksDone = useSelector(selectIsEveryTaskDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const dispatch = useDispatch();

    return (
        <StyledContainer>
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