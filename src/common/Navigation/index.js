
import { StyledNavLink, StyledNavigation, StyledNavList, StyledNavListItem } from "./styled";

const Navigation = () => (
    <StyledNavigation>
        <StyledNavList>
            <StyledNavListItem>
                <StyledNavLink activeClassName="active" to="/zadania">
                    Zadania
                </StyledNavLink>
            </StyledNavListItem>
            <StyledNavListItem>
                <StyledNavLink activeClassName="active" to="/autor">
                    O autorze
                </StyledNavLink>
            </StyledNavListItem>
        </StyledNavList>
    </StyledNavigation>
)
export default Navigation;