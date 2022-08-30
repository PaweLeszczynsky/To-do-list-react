import "./style.css"
const BodyContainer = (props) => (
    <body className="bodyContainer">
        {props.children}
    </body>
);
export default BodyContainer;