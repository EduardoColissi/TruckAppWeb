import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage/LoginPage"



export const Router = () => {

    return(

        <BrowserRouter>
            <Routes>

                <Route path="/" element={<LoginPage/>} />
                {/* <Route path="/signup" element={<SignU/>} /> */}

            </Routes>
        </BrowserRouter>
    )


}