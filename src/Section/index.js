import { StyledSection, StyledHeader } from "./styled";

const Section = ({ title, extraHeaderContent, body }) => (
    <StyledSection className="section">
        <StyledHeader className="section__header">
            {title}
            {extraHeaderContent}
        </StyledHeader>
        {body}
    </StyledSection>
);

export default Section;