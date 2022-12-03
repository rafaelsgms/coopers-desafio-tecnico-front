import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from './Home';
import MainSection from './MainSection';
import Register from './Register';


const MainRoutes = () => {
    const ProtectedRoutes = ({ redirectTo }) => {
        const token = getItem("token");
        const isAuthenticated = token;

        return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
    };

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Register />} />
            <Route element={<ProtectedRoutes redirectTo="/" />}>
                <Route path="/main" element={<MainSection />} />
            </Route>
        </Routes>
    );
};

export default MainRoutes;