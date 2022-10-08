import { StyledList, StyledListItem, StyledDoneButton, StyledDeleteButton, StyledDeleteIcon, StyledCheckmarkIcon } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <StyledList>
        {!!tasks && (
            tasks.map(task => (
                <StyledListItem
                    key={task.id}
                    hidden={hideDone && task.done}
                    done={task.done}
                >
                    <StyledDoneButton
                        onClick={() => toggleTaskDone(task.id)}
                    >
                        {task.done ?
                            <StyledCheckmarkIcon /> : ""
                        }
                    </StyledDoneButton>
                    {task.content}
                    <StyledDeleteButton
                        onClick={() => removeTask(task.id)}
                    >
                        <StyledDeleteIcon />
                    </StyledDeleteButton>
                </StyledListItem>
            )))}
    </StyledList>
);

export default Tasks;
