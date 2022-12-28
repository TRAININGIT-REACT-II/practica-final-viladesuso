import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import NotesList from "../components/NotesList";
import { AUTORIZACION_APP } from "../constants/form";
import { CREATE, HOME, LOGOUT } from "../routes/path";

/**
 * Pagina de lista de NOTAS
 */

const Notes = () => {
  const [todos, setTodos] = useState([]);
  const [token, setToken] = useState(localStorage.getItem(AUTORIZACION_APP));

  // Función para obtener la lista de tareas
  const fetchTodos = () => {
    fetch("/api/notes", {
      // Pasamos el token en el header
      headers: {
        "api-token": token,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if (json.error != null) {
          setError(json.error);
        } else {
          setTodos(json);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTodos();
  }, [token]);

  const onReset = () => {
    setTodos([]);
  }

  return(
    <section aria-describedby="desc">
    <h1 id="desc">
      Esto es la lista de NOTES.
    </h1>
    <Link to={CREATE}>Crear nueva nota</Link>
    <br></br>
    <Link to={LOGOUT}>Cerrar Sesión</Link>
    <ErrorBoundary message="Algo ha salido mal en Adios! Tu lista de Notas viene a null" onReset={onReset}>
      <NotesList todos={todos} />
    </ErrorBoundary>
  </section>
  )

};
  
export default Notes;