import { Link } from "react-router-dom";
import "./Form.css";

const NotesList = ({ todos }) => {
  return (
    <section className="todoslist">
      <h3>Lista de Tareas</h3>
      <ul className="todoslist_list">
        {todos.map(todo => (
          <li key={todo.id}><Link to={`/private/note/${todo.id}`}>{todo.title}</Link></li>
        ))}
        
      </ul>
    </section>
  );
};

export default NotesList;