import { Link } from "react-router-dom";
import { CREATE, LOGIN, LOGOUT, REGISTER } from "../routes/path";

/**
 * Pagina principal - Inicio Sesión
 */
const Home = () => (
    <section aria-describedby="desc">
      <h1 id="desc">
        Esta es la HOME de la aplicación TRAINING NOTES
      </h1>
      <Link to={LOGIN}>Iniciar sesión</Link>
    <br></br>
      <Link to={REGISTER}>Crear cuenta</Link>
    </section>
  );
  
  export default Home;