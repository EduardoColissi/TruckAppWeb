import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ContainerCard } from "./stylesDetailPage";

const DetailsPage = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState([]);

  const getUsers = async () => {
    const resp = await axios.get(`http://localhost:3003/users/all/user/${id}`);
    setUserDetails(resp.data);
    console.log(resp.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const UserDetailsCard = ({ userDetails }) => {
    return (
      <ContainerCard>
        <h1>{userDetails.name}</h1>
        <p>{userDetails.cpf}</p>
        <p>{userDetails.numCelular}</p>
        <p>{userDetails.vehicleType}</p>
        <p>{userDetails.licensePlate}</p>
        <p>{userDetails.createdAt}</p>
      </ContainerCard>
    );
  };

  return <UserDetailsCard userDetails={userDetails}></UserDetailsCard>;
};

export default DetailsPage;
