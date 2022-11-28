import axios from "axios";
import { useNavigate } from 'react-router-dom'
import React from "react";
import { DivInput, PageContainer } from "./style";
import { goToShippingPage } from "../../routes/coordinator";


export const LoginPage = () => {
    const navigate = useNavigate();

    const [cpf, setCpf] = React.useState("")
    const [password, setPassword] = React.useState("")

    const onChangeCpf = (event) => {
        setCpf(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const cpfMask = (value) => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
    }


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
            alert(error)
        }

    }



    return(
        <PageContainer>
            <h1>LOGIN WEB</h1>

                <DivInput>
                    <input placeholder="CPF" value={cpfMask(cpf)} onChange={onChangeCpf} type="text" maxLength='14'/>
                    <input placeholder="Senha" value={password} onChange={onChangePassword} type="password"/>
                </DivInput>

            <button onClick={login}>ENTRAR</button>
        </PageContainer>
    )


}