import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavigation = styled.nav`
    margin: 0 auto;
    display: flex;
    background-color: teal;
    color: white;
    height: 70px;
    align-items: center;
    justify-content: center;
`;

export const StyledNavList = styled.ul`
    list-style: none;
    margin: 0;
    display: flex;
    flex-direction: row;
    min-width: 100%;
    padding: 10px 0;
    font-weight: 300;
    word-break: break-word;
    align-items: center;
    justify-content: center;
`;

export const StyledNavListItem = styled.li`
    margin: 0 20px;
`;

export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    font-weight: 300;
    &.active{
        font-weight: 500; 
    }
`;