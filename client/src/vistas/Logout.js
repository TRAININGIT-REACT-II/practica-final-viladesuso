import { useEffect } from "react";
import { useAuthContext } from "../contexts/authContext";

/**
 * Pagina principal - Cierre Sesión
 */
const Logout = () => {
    const {logout} = useAuthContext();
    
    useEffect(() => logout());
    return null;

};
  
  export default Logout;