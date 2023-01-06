import styled, { css } from "styled-components";

export const StyledContainer = styled.div`

display: flex;

@media (max-width:750px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
`;

export const StyledInteractionButton = styled.button`
    border: none;
    background-color: transparent;
    color: teal;
    font-weight: 300;
    font-size: 17px;
    transition: 1s;

    ${({ areTasksEmpty }) => areTasksEmpty && css`
        display: none;
    `}

    &:hover{
        color: turquoise;
    cursor: pointer;
    }

    &:disabled{
        color: grey;
    }
`;