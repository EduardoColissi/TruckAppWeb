import styled from "styled-components";

export const Container = styled.div`
  font-family: "Roboto", sans-serif;
  background: #115c2f;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    width: 280px;
    margin: 5px;
    height: 50px;
    border: 1px solid grey;
    border-radius: 4px;
    font-size: 18px;
    padding-left: 10px;
  }

  p {
    color: white;
  }

  a {
    text-decoration: none;
    color: white;
  }

  button {
    width: 200px;
    height: 50px;
    margin-top: 15px;
    border-radius: 4px;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;
