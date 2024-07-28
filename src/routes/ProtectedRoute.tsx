import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const ProtectedRoute = () => {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;