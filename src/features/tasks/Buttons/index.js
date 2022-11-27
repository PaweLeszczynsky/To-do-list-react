import { StyledContainer, StyledInteractionButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
    toggleHideDone, setAllTasksDone, selectIsEveryTaskDone,
    selectHideDone, selectAreTasksEmpty
} from "../tasksSlice";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const allTasksDone = useSelector(selectIsEveryTaskDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const dispatch = useDispatch();

    if (areTasksEmpty) {
        return null;
    };

    return (
        <StyledContainer>
            <StyledInteractionButton
                onClick={() => { dispatch(toggleHideDone()) }}
            >
                {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
            </StyledInteractionButton>
            <StyledInteractionButton
                onClick={() => { dispatch(setAllTasksDone()) }}
                disabled={allTasksDone}
            >
                Ukończ wszystkie
            </StyledInteractionButton>
        </StyledContainer>)
};

export default Buttons;