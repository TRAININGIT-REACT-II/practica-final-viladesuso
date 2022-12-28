import { createContext, useCallback, useContext, useState ,useMemo} from "react";
import { AUTORIZACION_APP } from "../constants/form";



export const AuthContext = createContext();

export function AuthContextProvider({children}) {

    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem(AUTORIZACION_APP));

    const login  = useCallback(function (token) {
        localStorage.setItem(AUTORIZACION_APP, token);
        setIsAuthenticated(true);
    }, []);

    const logout = useCallback(function (token) {
        localStorage.removeItem(AUTORIZACION_APP, token);
        setIsAuthenticated(false);
    }, []);

    const value = useMemo(() => ({
        login,
        logout,
        isAuthenticated
    }), [login,logout, isAuthenticated]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

}

export function useAuthContext() {
    return useContext(AuthContext);
};