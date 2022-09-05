import "./style.css";
const Buttons = ({ tasks, hideDone, toggleHideDone }) => {

    if (tasks.length === 0) {
        return null;
    };
    return (
        <div className="section__interactionButtonsContainer">
            <button
                onClick={toggleHideDone}
                className="section__tasksInteractionButton"
            >
                {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
            </button>
            <button
                disabled={tasks.every(({ status }) => status)}
                className="section__tasksInteractionButton">
                Ukończ wszystkie
            </button>
        </div>)
};
export default Buttons;