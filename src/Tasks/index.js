import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="taskList">
        {!!tasks && (
            tasks.map(task => (
                <li
                    key={task.id}
                    className=
                    {`taskList__item 
                ${hideDone && task.done ? "taskList__item--hidden" : ""} 
                ${task.done ? "taskList__item--done" : ""}
                `}
                >
                    <button
                        onClick={() => toggleTaskDone(task.id)}
                        className="taskList__checkedButton"
                    >
                        {task.done ?
                            <ion-icon class="taskList__icon" name="checkmark-outline"></ion-icon> :
                            ""
                        }
                    </button>
                    {task.content}
                    <button
                        onClick={() => removeTask(task.id)}
                        className="taskList__deleteTask"
                    >
                        <ion-icon class="taskList__icon" name="trash-outline"></ion-icon>
                    </button>
                </li>
            )))}
    </ul>
);
export default Tasks;
