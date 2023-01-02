import styled from "styled-components";

export const PageContainer = styled.div`

    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    background-color: #115C2F;
    justify-content: center;

    h1 {
        color: white;
    }

    input {
        width: 280px;
        margin: 5px;
        height: 50px;
        border: 1px solid grey;
        border-radius: 4px;
        font-size: 18px;
        padding-left: 10px;
        
    }

    button {
        width: 200px;
        height: 50px;
        margin-top: 15px;
        border-radius: 4px;
        border: none;
        font-size: 1.2rem;
    }

`

export const DivInput = styled.div`

    display: flex;
    flex-direction: column;
    width: 300px;
    height: 120px; 
    align-items: center;

`

