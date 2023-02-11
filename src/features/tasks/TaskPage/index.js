import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../../common/Header";
import MainContainer from "../../../common/MainContainer";
import Section from "../../../common/Section";
import { getTaskById } from "../tasksSlice";
import { StyledParagraph } from "./styled";


const TaskPage = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));
    return (
        <MainContainer>
            <Header
                title="Szczegóły zadania"
            />
            <Section
                title={task ? task.content : "Nie znaleziono zadania 😢"}
                body=
                {task ?<>
                    <StyledParagraph><strong>Zadanie ukończone:</strong> {task.done ? "Tak" : "Nie"}</StyledParagraph> 
                </> : ""}

            />
        </MainContainer>
    );
};
export default TaskPage;