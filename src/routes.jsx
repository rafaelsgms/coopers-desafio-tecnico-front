import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Login from './components/Login'
import Home from './Home'
import ToDoDone from "./components/ToDoDone";

const MainRoutes = () => {
    const ProtectedRoutes = ({ redirectTo }) => {
        const token = getItem("token");
        const isAuthenticated = token;

        return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
    };

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Login />} />
            <Route path="/tododone" element={<ToDoDone />} />
{/* 
            <Route element={<ProtectedRoutes redirectTo="/" />}>
            </Route> */}
        </Routes>
    );
};

export default MainRoutes;