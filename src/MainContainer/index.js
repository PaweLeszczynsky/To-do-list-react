import "./style.css"
const MainContainer = (props) => (
    <main className="mainSection">
        {props.children}
    </main>
);
export default MainContainer;