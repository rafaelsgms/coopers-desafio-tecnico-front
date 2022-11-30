import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Home from './Home'


const MainRoutes = () => {
    const ProtectedRoutes = ({ redirectTo }) => {
        const token = getItem("token");
        const isAuthenticated = token;

        return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
    };

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<ProtectedRoutes redirectTo="/" />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
    );
};

export default MainRoutes;