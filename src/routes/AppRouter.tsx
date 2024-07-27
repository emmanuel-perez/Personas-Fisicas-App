import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { Navbar } from "../components";
import { LoginPage } from "../pages";
import { SignUpPage } from "../pages";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            {/* <Navbar /> */}
            <Routes location={location} key={location.pathname}>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/sign-up' element={<SignUpPage />} />
            </Routes>
        </BrowserRouter>
    )
}