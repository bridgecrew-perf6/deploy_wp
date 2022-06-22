import { useContext, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Sidenav } from "../components/sidenav/Sidenav";
import { BusinessContext } from "../contexts/BusinessContext/BusinessContext";
import { AboutUs } from "../pages/about-us/AboutUs";
import { B2bSales } from "../pages/b2b-sales/B2bSales";
import { ContactUs } from "../pages/contact-us/ContactUs";
import { Home } from "../pages/home/Home";
import { Login } from "../pages/login/Login";
import { Register } from "../pages/register/Register";
import { Store } from "../pages/store/Store";

export const AppRouter = () => {
    const [state, setState] = useContext(BusinessContext);



    useEffect(() => {
        if (state.city_id === "" || state.city_name === "") {

            setState({ ...state, dialogCity: true });

        } else {
            console.log(state.city_name)
        }
        // eslint-disable-next-line
    }, [state.city_id,state.city_name]);

    return (
        <BrowserRouter>
            <Sidenav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/b2b-sales" element={<B2bSales />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/store" element={<Store />} />
                </Routes>
            </Sidenav>
        </BrowserRouter>
    )
}