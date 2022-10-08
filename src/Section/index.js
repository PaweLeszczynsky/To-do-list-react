import { StyledSection, StyledHeader } from "./styled";

const Section = ({ title, extraHeaderContent, body }) => (
    <StyledSection>
        <StyledHeader>
            {title}
            {extraHeaderContent}
        </StyledHeader>
        {body}
    </StyledSection>
);

export default Section;