import axios from "axios";
import React from "react";
import { DivInput, PageContainer } from "./style";


export const LoginPage = () => {

    const [cpf, setCpf] = React.useState("")
    const [password, setPassword] = React.useState("")

    // INCLUIR AXIOS POST PARA LOGIN

    const onChangeCpf = (event) => {
        setCpf(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    return(
        <PageContainer>
            <h1>LOGIN</h1>

                <DivInput>
                    <input placeholder="CPF" value={cpf} onChange={onChangeCpf}/>
                    <input placeholder="Senha" value={password} onChange={onChangePassword}/>
                </DivInput>

            <button>ENTRAR</button>
        </PageContainer>
    )


}