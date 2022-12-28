import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EditNoteForm from "../components/EditNoteForm";
import { AUTORIZACION_APP } from "../constants/form";

/**
 * Pagina editar NOTA
 */
const Edit = () => {

  const {id} = useParams()

  return (<section aria-describedby="desc">
  <h1 id="desc">
    Indica el nuevo contenido de la nota.
  </h1>
  <EditNoteForm id={id}/>
</section>)
}


  export default Edit;