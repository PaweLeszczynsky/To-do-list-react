import "./style.css";
const Form = () => (
  <form className="addTaskForm">
    <input className="addTaskForm__addTaskInput" type="text"
      placeholder="Co jest do zrobienia?" />
    <button className="addTaskForm__addTaskButton">Dodaj zadanie</button>
  </form>
);
export default Form;