
import { StyledNavLink, StyledNavigation, StyledNavList, StyledNavListItem } from "./styled";
import { useState } from "react";

const Navigation = () => {
    const [opacityNav, setOpacityNav] = useState(0);
    const changeThemeOpacity = () => {
        setOpacityNav(1);
    };
    return (
        <StyledNavigation>
            <StyledNavList>
                <StyledNavListItem opacityNav={opacityNav} onMouseOver={() => { changeThemeOpacity() }}>
                    <StyledNavLink activeClassName="active" to="/zadania">
                        Zadania
                    </StyledNavLink>
                </StyledNavListItem>
                <StyledNavListItem opacityNav={opacityNav} onMouseOver={() => { changeThemeOpacity() }}>
                    <StyledNavLink activeClassName="active" to="/autor">
                        O autorze
                    </StyledNavLink>
                </StyledNavListItem>
            </StyledNavList>
        </StyledNavigation>
    )
};
export default Navigation;