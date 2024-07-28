import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LoginPage } from "../pages";
import { SignUpPage } from "../pages";
import { ReportsPage } from "../pages/ReportsPage";
import { PersonasFisicasPage } from "../pages/PersonasFisicasPage";
import { Navbar } from "../components/Navbar";
import { UpdatePersonaFisicaPage } from "../pages/UpdatePersonaFisicaPage";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import ProtectedRoute from "./ProtectedRoute";

export const AppRouter = () => {

    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    return (
        <BrowserRouter>
            {
                isAuthenticated ? <Navbar /> : null
            }
            <Routes location={location} key={location.pathname}>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/sign-up' element={<SignUpPage />} />
                {/* Rutas protegidas */}
                <Route element={<ProtectedRoute />}>
                    <Route path='/reports' element={<ReportsPage />} />
                    <Route path="/personas-fisicas/:id/edit" element={<UpdatePersonaFisicaPage />} />
                    <Route path='/personas-fisicas' element={<PersonasFisicasPage />} />
                </Route></Routes>
        </BrowserRouter>
    )
}