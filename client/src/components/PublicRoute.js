import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/authContext";
import { NOTES } from "../routes/path";

export default function PublicRoute() {
    const {isAuthenticated} = useAuthContext();
    
    if (isAuthenticated){
        return <Navigate to={NOTES} />;
    }

    return (
        <div>
            <Outlet />
        </div>
    );
}