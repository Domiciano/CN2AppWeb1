import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    
    const [token, setToken] = useState(
        () => {
            return localStorage.getItem("token") || null;
        }
    );

    useEffect(() => {
    // Cada vez que cambia el token, sincroniza con localStorage
    if (token) {
        localStorage.setItem("token", token);
    } else {
        localStorage.removeItem("token");
    }
    }, [token]);


    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    );

};
//<AuthProvider>   <App />   </AuthProvider>
export {
    AuthProvider,
    AuthContext
};