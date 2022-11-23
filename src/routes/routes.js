import { BrowserRouter, Route, Routes } from "react-router-dom"



export const Router = () => {

    return(

        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<SignUp/>} />

            </Routes>
        </BrowserRouter>
    )


}