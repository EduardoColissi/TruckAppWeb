import axios from "axios";
import { useNavigate } from 'react-router-dom'
import React from "react";
import { DivInput, PageContainer } from "./style";
import { goToShippingPage } from "../../routes/coordinator";


export const LoginPage = () => {
    const navigate = useNavigate();

    const [cpf, setCpf] = React.useState("")
    const [password, setPassword] = React.useState("")


    // INCLUIR AXIOS POST PARA LOGIN

    const login = async () => {
        
        try {
            const body = {
                cpf,
                password
            }

            await axios.post("http://localhost:3003/user/login", body)
            
            goToShippingPage(navigate)

        } catch (error) {
            console.log(error)
            alert(error.response.data.message)
        }

    }

    const onChangeCpf = (event) => {
        setCpf(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    return(
        <PageContainer>
            <h1>LOGIN WEB</h1>

                <DivInput>
                    <input placeholder="CPF" value={cpf} onChange={onChangeCpf}/>
                    <input placeholder="Senha" value={password} onChange={onChangePassword}/>
                </DivInput>

            <button onClick={login}>ENTRAR</button>
        </PageContainer>
    )


}