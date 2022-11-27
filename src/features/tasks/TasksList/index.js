import { useSelector, useDispatch } from "react-redux";
import { selectTasksState, toggleTaskDone, removeTask } from "../tasksSlice";
import {
    StyledList, StyledListItem, StyledDoneButton,
    StyledDeleteButton, StyledDeleteIcon, StyledCheckmarkIcon
} from "./styled";

const TasksList = () => {
    const { tasks, hideDone } = useSelector(selectTasksState);
    const dispatch = useDispatch();

    return (
        <StyledList>
            {!!tasks && (
                tasks.map(task => (
                    <StyledListItem
                        key={task.id}
                        hidden={hideDone && task.done}
                        done={task.done}
                    >
                        <StyledDoneButton
                            onClick={() => dispatch(toggleTaskDone(task.id))}
                        >
                            {task.done ?
                                <StyledCheckmarkIcon /> : ""
                            }
                        </StyledDoneButton>
                        {task.content}
                        <StyledDeleteButton
                            onClick={() => dispatch(removeTask(task.id))}
                        >
                            <StyledDeleteIcon />
                        </StyledDeleteButton>
                    </StyledListItem>
                )))}
        </StyledList>
    );
};

export default TasksList;
