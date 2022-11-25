import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage/LoginPage"
import { ShippingPage } from "../pages/Shipping/ShippingPage"



export const Router = () => {

    return(

        <BrowserRouter>
            <Routes>

                <Route path="/" element={<LoginPage/>} />
                <Route path="/shipping" element={<ShippingPage/>} />
            </Routes>
        </BrowserRouter>
    )


}