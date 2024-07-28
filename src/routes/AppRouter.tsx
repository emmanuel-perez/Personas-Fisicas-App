import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { Navbar } from "../components";
import { LoginPage } from "../pages";
import { SignUpPage } from "../pages";
import { ReportsPage } from "../pages/ReportsPage";
import { PersonasFisicasPage } from "../pages/PersonasFisicasPage";
import { Navbar } from "../components/Navbar";

export const AppRouter = () => {
    return (
        <BrowserRouter>
        <Navbar />
            {/* <Navbar /> */}
            <Routes location={location} key={location.pathname}>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/sign-up' element={<SignUpPage />} />
                <Route path='/reports' element={<ReportsPage />} />
                <Route path='/personas-fisicas' element={<PersonasFisicasPage />} />
            </Routes>
        </BrowserRouter>
    )
}