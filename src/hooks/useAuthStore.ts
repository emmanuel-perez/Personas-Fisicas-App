import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { onClearUser, onSetIsAuthenticated, onSetJwt } from "../features/authSlice";
import { authApi } from "../api/authApi";


export const useAuthStore = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loginRequest } = authApi();

    const loginUser = async (email: string, password: string) => {
        const response = await loginRequest(email, password);

        if (response && response.status !== 400) {
            dispatch(onSetJwt(response.data.Data));
            localStorage.setItem('auth-token', response.data.Data);
            dispatch(onSetIsAuthenticated(true));
            navigate('/personas-fisicas')
        }
        return response;
    }

    const logoutUser = () => {
        dispatch(onClearUser())
        navigate('/login')
    }

    return {
        loginUser,
        logoutUser,
    }
}
