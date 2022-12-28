import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "../components/Modal";
import { AUTORIZACION_APP } from "../constants/form";

/**
 * Pagina ver una NOTA
 */
const Note = () => {
  const {id} = useParams()

  const [nota, setNota] = useState("");
  const [token, setToken] = useState(localStorage.getItem(AUTORIZACION_APP));

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Función para obtener la lista de tareas
  const fetchTodos = () => {
    fetch(`/api/notes/${id}`, {
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
          setNota(json);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTodos();
  }, [token]);

  return (
    <section aria-describedby="desc">
      <h1 id="desc">
        Esto es la EDIT.
      </h1>
      {nota.title}:{nota.content}
      <div>
        <Link to={`/private/edit/${id}`}>
          <button>Editar Nota</button>
        </Link>
        <button onClick={openModal}>Borrar Nota</button>
        <Modal show={showModal} onClose={closeModal}>
          <h3>Estás seguro de querer borrar la nota?</h3>
          <Link to={`/private/delete/${id}`}>
            <button>Borrar Nota</button>
          </Link>
        </Modal>
      </div>
    </section>
  )


}
  
  export default Note;