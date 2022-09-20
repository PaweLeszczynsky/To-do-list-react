import "./style.css";
const Buttons = ({ tasks, hideDone, toggleHideDone, setAllTasksDone }) => {

    if (tasks.length === 0) {
        return null;
    };
    return (
        <div className="interactionButtonsContainer">
            <button
                onClick={toggleHideDone}
                className="interactionButtonsContainer__Button"
            >
                {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
            </button>
            <button
                onClick={setAllTasksDone}
                disabled={tasks.every(({ status }) => status)}
                className="interactionButtonsContainer__Button">
                Ukończ wszystkie
            </button>
        </div>)
};
export default Buttons;