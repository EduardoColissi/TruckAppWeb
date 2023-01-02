import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, ContainerCard } from "./stylesDetailPage";
import Navbar from "../../components/Navbar/Navbar";

const DetailsPage = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState([]);

  const getUsers = async () => {
    const resp = await axios.get(`http://localhost:3003/users/all/user/${id}`);
    setUserDetails(resp.data);
    console.log(resp.data);
  };

  const formatDate = (value) => {
    value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2");
    value.split("-").reverse().join("/");
    return value;
  };

  useEffect(() => {
    getUsers();
  }, []);

  const UserDetailsCard = ({ userDetails }) => {
    return (
      <Container>
        <ContainerCard>
          <h1>{userDetails.name}</h1>
          <h4>CPF: {userDetails.cpf}</h4>
          <h4>Numero do Celular: {userDetails.numCelular}</h4>
          <h4>Tipo do Veículo: {userDetails.vehicleType}</h4>
          <h4>Placa do Veículo: {userDetails.licensePlate}</h4>
          <h4>Data de criação do motorista: {userDetails.createdAt}</h4>
        </ContainerCard>
      </Container>
    );
  };

  return <UserDetailsCard userDetails={userDetails}></UserDetailsCard>;
};

export default DetailsPage;
