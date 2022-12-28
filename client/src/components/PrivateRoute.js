import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/authContext";
import { LOGIN } from "../routes/path";

export default function PrivateRoute() {
    const {isAuthenticated} = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to={LOGIN} />;
    }

    return (
        <div>
            <Outlet />
        </div>
    );
}