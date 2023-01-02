import React from "react";
import { useNavigate } from "react-router-dom";

export const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
    const token = window.localStorage.getItem('token')

    if(!token) {
        alert('You must be logged in to access this page!')
        goToLoginPage(navigate)
    }
    }, [])
}