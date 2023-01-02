import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardContainer, Container } from "./stylesDetailsPageFreights";

const DetailsPageFreights = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [customHouse, setCustomHouse] = useState("");
  const [commodityValue, setCommodityValue] = useState("");
  const [grossWeight, setGrossWeight] = useState("");
  const [truckType, setTruckType] = useState("");
  const [points, setPoints] = useState("");
  const [origin, setOrigin] = useState("");
  const [destiny, setDestiny] = useState("");
  const [value, setValue] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [date, setDate] = useState("");

  const [freightsDetails, setFreightsDetails] = useState([]);

  const getFreights = async () => {
    const resp = await axios.get(
      `http://localhost:3003/freights/all/freight/${id}`
    );
    setFreightsDetails(resp.data);
  };

  useEffect(() => {
    getFreights();
  }, []);

  const FreightsCardContainer = ({ freightDetails }) => {
    return (
      <Container>
        <CardContainer>
          <h1>{freightDetails.code}</h1>
          <h4>Descrição: {freightDetails.description}</h4>
          <h4>Valor: {freightDetails.value}</h4>
          <h4>Quando devera ser realizado: {freightDetails.date}</h4>
          <h4>Data de limite: {freightDetails.deadline}</h4>
          <h4>Origin: {freightDetails.origin}</h4>
          <h4>Destino: {freightDetails.destiny}</h4>
          <h4>Pontos por corrida: {freightDetails.points}</h4>
          <h4>Peso da mercadoria: {freightDetails.grossWeight}</h4>
          <h4>Valor da mercadoria: {freightDetails.commodityValue}</h4>
          <h4>Alfandega: {freightDetails.customHouse}</h4>
        </CardContainer>
      </Container>
    );
  };

  return (
    <FreightsCardContainer
      freightDetails={freightsDetails}
    ></FreightsCardContainer>
  );
};

export default DetailsPageFreights;
