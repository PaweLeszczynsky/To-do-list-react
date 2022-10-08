import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: white;
    min-width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 0 20px;
`;

export const StyledHeader = styled.header`
    font-size: 20px;
    font-weight: 600;
    border-bottom: 1px solid rgb(221, 221, 221);
    min-width: 100%;
    padding: 20px;
    margin: 0;
    display: flex;
    justify-content: space-between;

    @media (max-width:750px) {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;