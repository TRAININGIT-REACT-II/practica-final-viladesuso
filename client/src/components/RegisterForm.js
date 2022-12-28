import { useState } from "react";
import { DEFAULT_STATE } from "../constants/form";

import "./Form.css";

// Formulario para el registro de un usuario

const RegisterForm = () => {

    //Estado del formulario y valores por defecto.
    const [formState, setFormState] = useState(DEFAULT_STATE);
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
        fetch("/api/register", {
            method: "POST",
            body: JSON.stringify(formState),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
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
        <label htmlFor="controlled-name">Nombre</label>
        <input id="controlled-name" type="text" value={formState.username} onChange={onChange("username")} />
        <label htmlFor="controlled-color">Pass</label>
        <input id="controlled-pass" type="text" value={formState.password} onChange={onChange("password")} />
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

export default RegisterForm;