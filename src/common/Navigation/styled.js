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
    border: ${({ theme }) => theme.navigation.sizeBorder} solid transparent;
    transition-property: border-bottom, border-left, border-right, border-top, background-color;
    transition-delay: .45s, .15s, .45s, .15s, .5s;
    
    &:hover{
        transition-property: border-bottom, border-left, border-right, border-top, background-color;
        transition-delay: .15s, .45s, .15s, .45s, .4s;
        border-width: ${({ theme }) => theme.navigation.sizeBorder};
        border-style: solid;
        border-bottom-color: azure;
        border-left-color: azure;
        border-right-color: azure;
        border-top-color: azure;
        background-color: rgba(240, 255, 255, 0.4);
    }

    &::before{
        opacity:${({ opacityNav }) => opacityNav};
        display: block;
        content: "";
        position: absolute;
        width: ${({ theme }) => theme.navigation.sizeBorder};
        height: ${({ theme }) => theme.navigation.sizeBorder};
        background-color: transparent;
        box-shadow: 0px 0px 2px transparent;
        bottom: ${({ theme }) => theme.navigation.offsetBorder};
        right: ${({ theme }) => theme.navigation.offsetBorder};
        animation: underlineBack1, underlineBack2, underlineBack3, underlineBack4;
        animation-delay: 0s, .15s, .3s, .45s;
        animation-duration: .15s, .15s, .15s, .15s;
    }
    &::after{
        opacity:${({ opacityNav }) => opacityNav};
        display: block;
        content: "";
        position: absolute;
        width: ${({ theme }) => theme.navigation.sizeBorder};
        height: ${({ theme }) => theme.navigation.sizeBorder};
        background-color: transparent;
        box-shadow: 0px 0px 2px transparent;
        bottom: ${({ theme }) => theme.navigation.offsetBorder};
        right: ${({ theme }) => theme.navigation.offsetBorder};
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
        animation: underline5, underline6, underline7, underline8;
        animation-delay: 0s, .15s, .3s, .45s;
        animation-duration: .15s, .15s, .15s, .15s;
    }
@keyframes underline1 {
    0% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;

    }

    100% {
        width: calc(100% - (${({ theme }) => theme.navigation.offsetBorder}) * 2);
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
    }
}

@keyframes underline2 {
    0% {
        left: ${({ theme }) => theme.navigation.offsetBorder};
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        width: calc(100% - (${({ theme }) => theme.navigation.offsetBorder}) * 2);
    }

    100% {
        left: ${({ theme }) => theme.navigation.offsetBorder};
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
    }
}

@keyframes underline3 {
    0% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        left: ${({ theme }) => theme.navigation.offsetBorder};
    }

    100% {
        left: ${({ theme }) => theme.navigation.offsetBorder};
        height: calc(100% - (${({ theme }) => theme.navigation.offsetBorder}) * 2);
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
    }
}

@keyframes underline4 {
    0% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        left: ${({ theme }) => theme.navigation.offsetBorder};
        height: calc(100% - (${({ theme }) => theme.navigation.offsetBorder}) * 2);
    }

    100% {
        left: ${({ theme }) => theme.navigation.offsetBorder};
        bottom: 100%;
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
    }
}

@keyframes underline5 {
    0% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
    }

    100% {
        height: calc(100% - (${({ theme }) => theme.navigation.offsetBorder}) * 2);
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
    }
}

@keyframes underline6 {
    0% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        height: calc(100% - (${({ theme }) => theme.navigation.offsetBorder}) * 2);
    }

    100% {
        bottom: 100%;
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
    }
}

@keyframes underline7 {
    0% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        right: ${({ theme }) => theme.navigation.offsetBorder};
        top: ${({ theme }) => theme.navigation.offsetBorder};
    }

    100% {
        top: ${({ theme }) => theme.navigation.offsetBorder};
        width: calc(100% - (${({ theme }) => theme.navigation.offsetBorder}) * 2);
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
    }
}

@keyframes underline8 {
    0% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        left: ${({ theme }) => theme.navigation.offsetBorder};
        top: ${({ theme }) => theme.navigation.offsetBorder};
        width: calc(100% - (${({ theme }) => theme.navigation.offsetBorder}) * 2);
    }

    100% {
        left: ${({ theme }) => theme.navigation.offsetBorder};
        top: ${({ theme }) => theme.navigation.offsetBorder};
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
    }
}

@keyframes underlineBack1 {
    0% {
        left: ${({ theme }) => theme.navigation.offsetBorder};
        top: ${({ theme }) => theme.navigation.offsetBorder};
        background-color: azure;
        box-shadow: 0px 0px 4px azure;

    }

    100% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        left: ${({ theme }) => theme.navigation.offsetBorder};
        height: calc(100% - (${({ theme }) => theme.navigation.offsetBorder}) * 2);
        top: ${({ theme }) => theme.navigation.offsetBorder};
    }
}

@keyframes underlineBack2 {
    0% {
        left: ${({ theme }) => theme.navigation.offsetBorder};
        height: calc(100% - (${({ theme }) => theme.navigation.offsetBorder}) * 2);
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
    }

    100% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        bottom: ${({ theme }) => theme.navigation.offsetBorder};
        left: ${({ theme }) => theme.navigation.offsetBorder};
    }
}

@keyframes underlineBack3 {
    0% {
        left: ${({ theme }) => theme.navigation.offsetBorder};
        bottom: ${({ theme }) => theme.navigation.offsetBorder};
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
    }

    100% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        left: ${({ theme }) => theme.navigation.offsetBorder};
        bottom: ${({ theme }) => theme.navigation.offsetBorder};
        width: calc(100% - (${({ theme }) => theme.navigation.offsetBorder}) * 2);
    }
}

@keyframes underlineBack4 {
    0% {
        width: calc(100% - (${({ theme }) => theme.navigation.offsetBorder}) * 2);
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
        left: ${({ theme }) => theme.navigation.offsetBorder};
        top: ${({ theme }) => theme.navigation.offsetBorder};
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
    }

    100% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        left: ${({ theme }) => theme.navigation.offsetBorder};
        top: ${({ theme }) => theme.navigation.offsetBorder};
        width: calc(100% - (${({ theme }) => theme.navigation.offsetBorder}) * 2);
    }
}

@keyframes underlineBack6 {
    0% {
        top: ${({ theme }) => theme.navigation.offsetBorder};
        width: calc(100% - (${({ theme }) => theme.navigation.offsetBorder}) * 2);
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
    }

    100% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        right: ${({ theme }) => theme.navigation.offsetBorder};
        top: ${({ theme }) => theme.navigation.offsetBorder};
    }
}

@keyframes underlineBack7 {
    0% {
        right: ${({ theme }) => theme.navigation.offsetBorder};
        bottom: 100%;
        background-color: azure;
        box-shadow: 0px 0px 4px azure;

    }

    100% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        right: ${({ theme }) => theme.navigation.offsetBorder};
        height: calc(100% - (${({ theme }) => theme.navigation.offsetBorder}) * 2);
    }
}

@keyframes underlineBack8 {
    0% {
        right: ${({ theme }) => theme.navigation.offsetBorder};
        height: calc(100% - (${({ theme }) => theme.navigation.offsetBorder}) * 2);
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
    }

    100% {
        background-color: azure;
        box-shadow: 0px 0px 4px azure;
        right: ${({ theme }) => theme.navigation.offsetBorder};
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