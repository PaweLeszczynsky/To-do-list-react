
import "./style.css";
const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="section__taskList">
        {tasks.map(task => (
            <li
                key={task.id}
                className=
                {`section__taskListItem 
                ${hideDoneTasks && task.status ? "section__taskListItem--hidden" : ""} 
                ${task.status ? "section__taskListItem--done" : ""}
                `}
            >
                <button className="section__taskList__checkedButton">
                    {task.status ?
                        <ion-icon class="section__taskList__icon" name="checkmark-outline"></ion-icon> :
                        ""
                    }
                </button>
                {task.content}
                <button className="section__taskList__deleteTask">
                    <ion-icon class="section__taskList__icon" name="trash-outline"></ion-icon>
                </button>
            </li>
        ))}
    </ul>
);
export default Tasks;