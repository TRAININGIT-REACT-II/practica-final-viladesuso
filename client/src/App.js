import { useEffect, useState } from "react";
import Status from "./components/Status";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./vistas/Home";
import Edit from "./vistas/Edit";
import Create from "./vistas/Create";
import Register from "./vistas/Register";
import Notes from "./vistas/Notes";
import Note from "./vistas/Note";
import Login from "./vistas/Login";
import Logout from "./vistas/Logout";
import { CREATE, EDIT, HOME, REGISTER, NOTES, NOTE, LOGIN, LOGOUT, DELETE } from "./routes/path";
import { AuthContextProvider } from "./contexts/authContext";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import Delete from "./vistas/Delete";

import "./App.css";


// Componente principal de la aplicación.
const App = () => {
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchConect = () => {
    fetch(URL_API_STATUS)
      .then((res) => res.json())
      .then((data) => setStatus(data.status === "ok"))
      .finally(() => setLoading(false));

      if(status == "ok"){
        return true;
      }else{
        return false;
      }     
  }

  useEffect(() => {
    fetchConect();
  }, []);

  // Mostramos la aplicación
  return (
    <main>
      <h1>Aplicación de Notas</h1>
      <p>
        Estado del servidor:
        {loading ? " Cargando..." : <Status status={status} />}
      </p>
      <nav>
        <ul>
          <li><Link to={HOME}>Home</Link></li>
          <li><Link to={LOGIN}>Cuenta</Link></li>
        </ul>
      </nav>
      <AuthContextProvider>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path="/" element={<PublicRoute />}>
            <Route path={HOME} element={<Home />} />
            <Route path={LOGIN} element={<Login />} />
            <Route path={REGISTER} element={<Register />} />
          </Route>
          <Route path={NOTES} element={<PrivateRoute />}>
            <Route path={CREATE} element={<Create />} />
            <Route path={NOTES} element={<Notes />} />
            <Route path={EDIT} element={<Edit />} />
            <Route path={DELETE} element={<Delete />} />
            <Route path={NOTE} element={<Note />} />
            <Route path={LOGOUT} element={<Logout />} />
          </Route>
        </Routes>
      </AuthContextProvider>
      
    </main>
  );
};

export default App;
