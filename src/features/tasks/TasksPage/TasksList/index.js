import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { toggleTaskDone, removeTask, selectTasksByQuery, selectHideDone } from "../../tasksSlice";
import searchQueryParamsName from "../searchQueryParamsName";
import {
    StyledList, StyledListItem, StyledDoneButton,
    StyledDeleteButton, StyledDeleteIcon, StyledCheckmarkIcon, StyledLink
} from "./styled";

const TasksList = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(searchQueryParamsName);
    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);
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
                        <StyledLink to={`/zadania/${task.id}`}>
                            {task.content}
                        </StyledLink>
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
