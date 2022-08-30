import "./style.css";
const Section = (props) => (
    <section className="section">
        <h1 class="section__header section__header--taskList">
            {props.title}
            {props.extraHeaderContent}
        </h1>
        {props.body}
    </section>
);
export default Section;