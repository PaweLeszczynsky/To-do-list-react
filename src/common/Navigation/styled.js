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
    border: 5px solid transparent;
    transition-property: border-bottom, border-left, border-right, border-top, background-color;
    transition-delay: .45s, .15s, .45s, .15s, .5s;
    
    &:hover{
        transition-property: border-bottom, border-left, border-right, border-top, background-color;
        transition-delay: .15s, .45s, .15s, .45s, .4s;
        transition-duration: 0, 0, 0, 0, .3s;
        border-bottom: 5px solid azure;
        border-left: 5px solid azure;
        border-right: 5px solid azure;
        border-top: 5px solid azure;
        background-color: rgba(240, 255, 255, 0.4);
    }
    &::before:not(:hover) {
    animation: underlineBack1, underlineBack2, underlineBack3, underlineBack4;
    animation-delay: 0s, .15s, .3s, .45s;
    animation-duration: .15s, .15s, .15s, .15s;
    }
    &::before{
        display: block;
        content: "";
        position: absolute;
        height: 5px;
        width: 5px;
        background-color: transparent;
        box-shadow: 0px 0px 2px transparent;
        bottom: ${props => props.theme.navigation.offsetBorder};
        right: ${props => props.theme.navigation.offsetBorder};
        animation: underlineBack1, underlineBack2, underlineBack3, underlineBack4;
        animation-delay: 0s, .15s, .3s, .45s;
        animation-duration: .15s, .15s, .15s, .15s;
    }
    &::after{
        display: block;
        content: "";
        position: absolute;
        height: 5px;
        width: 5px;
        background-color: transparent;
        box-shadow: 0px 0px 2px transparent;
        bottom: ${props => props.theme.navigation.offsetBorder};
        right: ${props => props.theme.navigation.offsetBorder};
        animation: underlineBack5, underlineBack6, underlineBack7, underlineBack8;
        animation-delay: 0s, .15s, .3s, .45s;
        animation-duration: .15s, .15s, .15s, .15s;
    }
    &:hover::after{
        animation: underline1, underline2, underline3, underline4;
        animation-delay: 0s, .15s, .3s, .45s;
        animation-duration: .15s, .15s, .15s, .15s;
    }
    &:hover:before{
        animation: underline5, underline6, underline7, underline8 forwards;
        animation-delay: 0s, .15s, .3s, .45s;
        animation-duration: .15s, .15s, .15s, .15s;
    }
    @keyframes underline1 {
    0% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        right: ${props => props.theme.navigation.offsetBorder};
        height: 5px;
        bottom: ${props => props.theme.navigation.offsetBorder};
    }

    100% {
        right: ${props => props.theme.navigation.offsetBorder};
        height: 5px;
        bottom: ${props => props.theme.navigation.offsetBorder};
        width: 100%;
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
    }
}

@keyframes underline2 {
    0% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        left: ${props => props.theme.navigation.offsetBorder};
        height: 5px;
        bottom: ${props => props.theme.navigation.offsetBorder};
        width: 100%;
    }

    100% {
        left: ${props => props.theme.navigation.offsetBorder};
        height: 5px;
        bottom: ${props => props.theme.navigation.offsetBorder};
        width: 5px;
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
    }
}

@keyframes underline3 {
    0% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        left: ${props => props.theme.navigation.offsetBorder};
        width: 5px;
    }

    100% {
        left: ${props => props.theme.navigation.offsetBorder};
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
        left: ${props => props.theme.navigation.offsetBorder};
        height: 100%;
    }

    100% {
        left: ${props => props.theme.navigation.offsetBorder};
        height: 5px;
        top: ${props => props.theme.navigation.offsetBorder};
    }
}

@keyframes underline5 {
    0% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        right: ${props => props.theme.navigation.offsetBorder};
        width: 5px;
    }

    100% {
        right: ${props => props.theme.navigation.offsetBorder};
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
        right: ${props => props.theme.navigation.offsetBorder};
        height: 100%;
    }

    100% {
        right: ${props => props.theme.navigation.offsetBorder};
        height: 5px;
        bottom: calc(100% - ${props => props.theme.navigation.offsetBorder});
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
    }
}

@keyframes underline7 {
    0% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        right: ${props => props.theme.navigation.offsetBorder};
        height: 5px;
        top: ${props => props.theme.navigation.offsetBorder};
    }

    100% {
        height: 5px;
        top: ${props => props.theme.navigation.offsetBorder};
        width: 100%;
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
    }
}

@keyframes underline8 {
    0% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        left: ${props => props.theme.navigation.offsetBorder};
        height: 5px;
        top: ${props => props.theme.navigation.offsetBorder};
        width: 100%;
    }

    100% {
        left: ${props => props.theme.navigation.offsetBorder};
        height: 5px;
        top: ${props => props.theme.navigation.offsetBorder};
        width: 5px;
    }
}

@keyframes underlineBack1 {
    0% {
        left: ${props => props.theme.navigation.offsetBorder};
        height: 5px;
        top: ${props => props.theme.navigation.offsetBorder};
        background-color: azure;
        box-shadow: 0px 0px 4px azure;

    }

    100% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        left: ${props => props.theme.navigation.offsetBorder};
        height: 100%;
        top: ${props => props.theme.navigation.offsetBorder};
    }
}

@keyframes underlineBack2 {
    0% {
        left: ${props => props.theme.navigation.offsetBorder};
        height: calc(100% - ${props => props.theme.navigation.offsetBorder});
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        width: 5px;

    }

    100% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        bottom: ${props => props.theme.navigation.offsetBorder};
        left: ${props => props.theme.navigation.offsetBorder};
        width: 5px;
    }
}

@keyframes underlineBack3 {
    0% {
        left: ${props => props.theme.navigation.offsetBorder};
        height: 5px;
        bottom: ${props => props.theme.navigation.offsetBorder};
        width: 5px;
        background-color: azure;
        box-shadow: 0px 0px 4px azure;

    }

    100% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        left: ${props => props.theme.navigation.offsetBorder};
        height: 5px;
        bottom: ${props => props.theme.navigation.offsetBorder};
        width: 100%;

    }
}

@keyframes underlineBack4 {
    0% {
        width: 100%;
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
    }

    100% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
    }
}

@keyframes underlineBack5 {
    0% {
        left: ${props => props.theme.navigation.offsetBorder};
        height: 5px;
        top: ${props => props.theme.navigation.offsetBorder};
        width: 5px;
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
    }

    100% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        left: ${props => props.theme.navigation.offsetBorder};
        height: 5px;
        top: ${props => props.theme.navigation.offsetBorder};
        width: 100%;
    }
}

@keyframes underlineBack6 {
    0% {
        height: 5px;
        top: ${props => props.theme.navigation.offsetBorder};
        width: 100%;
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
    }

    100% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        right: ${props => props.theme.navigation.offsetBorder};
        height: 5px;
        top: ${props => props.theme.navigation.offsetBorder};
    }
}

@keyframes underlineBack7 {
    0% {
        right: ${props => props.theme.navigation.offsetBorder};
        height: 5px;
        bottom: calc(100% - ${props => props.theme.navigation.offsetBorder});
        background-color: azure;
        box-shadow: 0px 0px 4px azure;

    }

    100% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        right: ${props => props.theme.navigation.offsetBorder};
        height: 100%;

    }
}

@keyframes underlineBack8 {
    0% {
        right: ${props => props.theme.navigation.offsetBorder};
        height: 100%;
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        width: 5px;

    }

    100% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        right: ${props => props.theme.navigation.offsetBorder};
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