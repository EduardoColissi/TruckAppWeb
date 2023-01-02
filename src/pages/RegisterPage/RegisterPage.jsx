import React from "react";
import { useState } from "react";
import { DivInput, PageContainer } from "../LoginPage/style";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form } from "./RegisterStyles";
import { useEffect } from "react";
import { goToLoginPage } from "../../routes/coordinator";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const [numCelular, setNumCelular] = useState("");

  const cpfMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const telephoneNumberMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d)(\d{4})$/, "$1-$2");
  };

  const handleSubmit = async () => {
    try {
      const body = {
        name,
        cpf,
        password,
        numCelular,
        licensePlate,
        vehicleType,
      };

      await axios.post("http://localhost:3003/users/signup", body);

      goToLoginPage(navigate);
    } catch (error) {
      console.log(error);
      alert(error);
    }
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
              type="text"
              placeholder="Digite a placa do seu veiculo"
              value={licensePlate}
              onChange={(e) => setLicensePlate(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="text"
              placeholder="Digite o numero do seu celular"
              value={telephoneNumberMask(numCelular)}
              onChange={(e) => setNumCelular(e.target.value)}
              maxLength="15"
              required
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="text"
              placeholder="Digite o tipo do seu veiculo"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
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
