import RegisterForm from "../components/RegisterForm";

/**
 * Pagina Registro
 */
const Register = () => (

    <section aria-describedby="desc">
      <h1 id="desc">
        En esta sección puedes crear un nuevo usuario para la aplicación.
      </h1>
      <RegisterForm />
    </section>
  );
  
  export default Register;