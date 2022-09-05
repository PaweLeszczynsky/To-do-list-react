import "./style.css";
const Buttons = ({ tasks, hideDone }) => {

    if (tasks.length === 0) {
        return null;
    };
    return (
        <div className="section__interactionButtonsContainer">
            <button className="section__tasksInteractionButton">
                {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
            </button>
            <button
                disabled={tasks.every(({ done }) => done)}
                className="section__tasksInteractionButton">
                Ukończ wszystkie
            </button>
        </div>)
};
export default Buttons;