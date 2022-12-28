import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AUTORIZACION_APP } from "../constants/form";
import { NOTES } from "../routes/path";

/**
 * Pagina eliminar NOTA
 */
const Delete = () => {

    const {id} = useParams()

    const [mensaje, setMensaje] = useState("");
    const [token, setToken] = useState(localStorage.getItem(AUTORIZACION_APP));
  
    // Función para obtener la lista de tareas
    const fetchEliminar = () => {
        fetch(`/api/notes/${id}`, {
            method: "DELETE",
            headers: {
                "api-token": token,
            },
        })
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            if(json.error != null){
                setMensaje([json.error]);
            }else{
                setMensaje("Eliminada con éxito");
            }
        })
    };
  
    useEffect(() => {
      fetchEliminar();
    }, [token]);
  
    return(
      <section aria-describedby="desc">
      <h1 id="desc">
        Esto es la lista de NOTES.
      </h1>
      {mensaje}
      <br></br>
      <Link to={NOTES}>Volver a la lista de notas</Link>
    </section>
    )
  }
  
  
    export default Delete;