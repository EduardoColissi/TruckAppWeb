import React from "react";
import { useState } from "react";
import { DivInput, PageContainer } from "../LoginPage/style";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form } from "./RegisterStyles";
import { useEffect } from "react";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmePassword] = useState("");

  const cpfMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      name,
      cpf,
      password,
    };

    useEffect(() => {
      axios
        .post("http://localhost:3003/users/signup", body)
        .then((resp) => console.log(resp))
        .catch((err) => console.log(err));
    }, [name]);

    navigate("/login");
  };

  return (
    <Container>
      <Form>
        <h1>Register</h1>
        <div>
          <label>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            <input
              type="text"
              placeholder="Digite seu cpf"
              value={cpfMask(cpf)}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            <input
              type="password"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmePassword(e.target.value)}
              required
            />
          </label>
        </div>
        <p>
          Ja tem conta? <Link to="/login">Clique aqui.</Link>
        </p>
        <button onClick={handleSubmit}>Registrar</button>
      </Form>
    </Container>
  );
};

export default RegisterPage;
