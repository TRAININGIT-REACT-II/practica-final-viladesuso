import LoginForm from "../components/LoginForm";

/**
 * Pagina principal - Inicio Sesión
 */
const Login = () => (
    <section aria-describedby="desc">
      <h1 id="desc">
        Introduce tus datos de usuario.
      </h1>
      <LoginForm />
    </section>
  );
  
  export default Login;