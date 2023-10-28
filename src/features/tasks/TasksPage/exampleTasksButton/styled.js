import styled from "styled-components";

export const StyledExampleTasksButton = styled.button`
    border: none;
    background-color: transparent;
    color: teal;
    font-weight: 300;
    font-size: 17px;
    transition: 1s;
    display: flex;
    padding: 0px;
    text-align: left;

    &:hover{
        color: turquoise;
    cursor: pointer;
    }

    &:disabled{
        color: grey;
        cursor: wait;
    }
`;