import styled from "styled-components";

export const StyledForm = styled.form`
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    min-width: 100%;
    padding: 0 20px;
    gap: 20px;

    @media (max-width:750px) {
        gap: 10px;
        flex-direction: column;
    }
`;

export const StyledInput = styled.input`
    padding: 10px;
    border: 2px solid rgb(221, 221, 221);
    font-weight: 300;
    flex-grow: 1;
`;

export const StyledButton = styled.button`
    padding: 10px;
    background-color: teal;
    border: none;
    color: white;
    font-weight: 300;
    transition: background 1s, transform 1s;

    &:hover{
        background-color: turquoise;
        cursor: pointer;
        transform: scale(1.15);

        @media (max-width:750px) {
            transform: scaleY(1.15) scaleX(1.05);
        }
    }
`;