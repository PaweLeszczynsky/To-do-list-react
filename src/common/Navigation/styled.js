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
    padding: 10px;
    position: relative;
    transition: background-color .3s ease;
    &:hover{
        background-color: rgba(240, 255, 255, 0.3);
        transition: background-color .3s ease;
        transition-delay: .4s;
    }
    &::before{
        display: block;
    content: "";
        position: absolute;
        height: 5px;
        width: 5px;
        background-color: transparent;
        box-shadow: 0px 0px 2px transparent;
        bottom: 0px;
        right: 0px;
    }
    &::after{
        display: block;
        content: "";
        position: absolute;
        height: 5px;
        width: 5px;
        background-color: transparent;
        box-shadow: 0px 0px 2px transparent;
        bottom: 0px;
        right: 0px;
    }
    &:hover::after{
        animation: underline1, underline2, underline3, underline4;
        animation-delay: 0s, .15s, .3s, .45s;
        animation-duration: .15s, .15s, .15s, .15s;
    }
    &:hover:before{
        animation: underline5, underline6, underline7, underline8;
        animation-delay: 0s, .15s, .3s, .45s;
        animation-duration: .15s, .15s, .15s, .15s;
    }
    @keyframes underline1 {
    0% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        right: 0px;
        height: 5px;
        bottom: 0px;
    }

    100% {
        right: 0px;
        height: 5px;
        bottom: 0px;
        width: 100%;
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
    }
}

@keyframes underline2 {
    0% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        left: 0px;
        height: 5px;
        bottom: 0px;
        width: 100%;
    }

    100% {
        left: 0px;
        height: 5px;
        bottom: 0px;
        width: 5px;
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
    }
}

@keyframes underline3 {
    0% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        left: 0px;
        width: 5px;
    }

    100% {
        left: 0px;
        height: 100%;
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        width: 5px;
    }
}

@keyframes underline4 {
    0% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        left: 0px;
        height: 100%;
    }

    100% {
        left: 0px;
        height: 5px;
        top: 0px;
    }
}

@keyframes underline5 {
    0% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        right: 0px;
        width: 5px;
    }

    100% {
        right: 0px;
        height: 100%;
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        width: 5px;
    }
}

@keyframes underline6 {
    0% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        right: 0px;
        height: 100%;
    }

    100% {
        right: 0px;
        height: 5px;
        bottom: calc(100% - 5px);
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
    }
}

@keyframes underline7 {
    0% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        right: 0px;
        height: 5px;
        top: 0px;
    }

    100% {
        height: 5px;
        top: 0px;
        width: 100%;
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
    }
}

@keyframes underline8 {
    0% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        left: 0px;
        height: 5px;
        top: 0px;
        width: 100%;
    }

    100% {
        left: 0px;
        height: 5px;
        top: 0px;
        width: 5px;
    }
}
`;

export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    font-weight: 300;
    &.active{
        font-weight: 500; 
    }
`;