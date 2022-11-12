import { StyledContainer, StyledInteractionButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllTasksDone } from "../tasksSlice";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    if (tasks.length === 0) {
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
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </StyledInteractionButton>
        </StyledContainer>)
};

export default Buttons;