import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
    const [screen, setScreen] = useState(false);
    const isLoggedIn = localStorage.getItem("login");

    useEffect(() => {
        const { innerWidth: width } = window;
        if (width < 620) {
            setScreen(true);
        }
    }, []);

    if (!isLoggedIn) {
        return screen ? <Navigate to="/check-pc" /> : <Navigate to="/auth/login" />;
    }

    return <Outlet />;
}
