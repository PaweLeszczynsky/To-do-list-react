import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 5fr auto;
    justify-content: space-between;
    min-width: 100%;
    padding: 0 20px;
    gap: 20px;

    @media (max-width:750px) {
        gap: 10px;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr;
    }
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