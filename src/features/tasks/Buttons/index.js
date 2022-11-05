import { StyledContainer, StyledInteractionButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllTasksDone }) => {
    if (tasks.length === 0) {
        return null;
    };
    
    return (
        <StyledContainer>
            <StyledInteractionButton
                onClick={toggleHideDone}
            >
                {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
            </StyledInteractionButton>
            <StyledInteractionButton
                onClick={setAllTasksDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </StyledInteractionButton>
        </StyledContainer>)
};

export default Buttons;