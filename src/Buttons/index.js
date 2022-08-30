import "./style.css";
const Buttons = (props) => {

    if (props.tasks.length === 0) {
        return null;
    };
    return (
        <div class="section__interactionButtonsContainer">
            <button className="section__tasksInteractionButton">
                {props.hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
            </button>
            <button
                disabled={props.tasks.every(({ done }) => done)}
                className="section__tasksInteractionButton">
                Ukończ wszystkie
            </button>
        </div>)
};
export default Buttons;