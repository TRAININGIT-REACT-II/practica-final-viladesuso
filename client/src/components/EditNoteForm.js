import { useState } from "react";
import { AUTORIZACION_APP, DEFAULT_NOTE } from "../constants/form";

//Formulario para la creación de una NOTA NUEVA

const EditNoteForm  = ({ id }) => {
//Estado del formulario y valores por defecto.
const [formState, setFormState] = useState(DEFAULT_NOTE);
const [mensaje, setMensaje] = useState("");

// Devolvemos una funcion para modificar una parte del estado!
const onChange = (key) => {
    return (e) => setFormState({
    ...formState,
    [key]: e.target.value
    });
}


const onSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/notes/${id}`, {
        method: "PATCH",
        body: JSON.stringify(formState),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "api-token": localStorage.getItem(AUTORIZACION_APP),
        },
    })
    .then((res) => {
        return res.json();
    })
    .then((json) => {
        if(json.error != null){
            setMensaje([json.error]);
        }else{
            setMensaje("Registrado con Éxito");
        }
    })
}

    return <div className="row">
    <div className="col-6">
    <form onSubmit={onSubmit}>
        <label htmlFor="controlled-name">Título</label>
        <input id="controlled-name" type="text" value={formState.title} onChange={onChange("title")} />
        <label htmlFor="controlled-color">Contenido</label>
        <input id="controlled-pass" type="text" value={formState.content} onChange={onChange("content")} />
        <button>Mandar preferencias</button>
    </form>
    </div>
    <div className="col-6">
    <pre>
        <code>
        {mensaje}
        </code>
    </pre>
    </div>
    </div>

}

export default EditNoteForm;