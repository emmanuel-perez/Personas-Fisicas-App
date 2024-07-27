import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { Navbar } from "../components";
import { LoginPage } from "../pages";
import { SignUpPage } from "../pages";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            {/* <Navbar /> */}
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<LoginPage />} />
                <Route path='/resume' element={<SignUpPage />} />
            </Routes>
        </BrowserRouter>
    )
}