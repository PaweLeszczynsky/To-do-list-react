import styled, { css } from "styled-components";
import { Trash } from '@styled-icons/ionicons-outline';
import { Checkmark } from '@styled-icons/ionicons-outline';

export const StyledList = styled.ul`
    list-style: none;
    margin: 0;
    display: flex;
    flex-direction: column;
    min-width: 100%;
    padding: 10px 0;
    font-weight: 300;
    word-break: break-word;
`;

export const StyledListItem = styled.li`
    margin: 0 20px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 10px;
    align-items: center;
    border-bottom: 2px solid rgb(221, 221, 221);
    padding: 10px 10px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const StyledDoneButton = styled.button`
    padding: 5px;
    background-color: green;
    color: white;
    border: none;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s;

    &:hover{
        background-color: hsl(120, 100%, 20%);
        cursor: pointer;
    }

    &:active{
        outline: 2px solid black;
        border-radius: 2px;
    }
`;

export const StyledDeleteButton = styled(StyledDoneButton)`
    background-color: red;

    &:hover{
        background-color: hsl(0, 100%, 30%);
        cursor: pointer;
    }
`;

export const StyledCheckmarkIcon = styled(Checkmark)`
    align-items: center;
    background-color: transparent;
    transition: transform 1s;

    &:hover{
        transform: scale(1.4);
    }
`;

export const StyledDeleteIcon = styled(Trash, StyledCheckmarkIcon)`
    align-items: center;
    background-color: transparent;
    transition: transform 1s;

    &:hover{
        transform: scale(1.4);
    }
`;
