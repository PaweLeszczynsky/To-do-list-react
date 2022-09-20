
import "./style.css";
const Tasks = ({ tasks, hideDone, removeTask, toggleTaskStatus }) => (
    <ul className="taskList">
        {tasks.map(task => (
            <li
                key={task.id}
                className=
                {`taskList__item 
                ${hideDone && task.status ? "taskList__item--hidden" : ""} 
                ${task.status ? "taskList__item--done" : ""}
                `}
            >
                <button
                    onClick={() => toggleTaskStatus(task.id)}
                    className="taskList__checkedButton"
                >
                    {task.status ?
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
        ))}
    </ul>
);
export default Tasks;
