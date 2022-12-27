import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

  const [freightsDetails, setFreightsDetails] = useState();

  const getFreights = async () => {
    const resp = await axios.get(
      `http://localhost:3003/freights/all/freight/${id}`
    );
    setDescription(resp.data.description);
    setDate(resp.data.date);
    setDeadline(resp.data.deadline);
    setCode(resp.data.code);
    setValue(resp.data.value);
    setDestiny(resp.data.destiny);
    setOrigin(resp.data.origin);
    setPoints(resp.data.points);
    setTruckType(resp.data.truckType);
    setGrossWeight(resp.data.grossWeight);
    setCommodityValue(resp.data.commodityValue);
    setCustomHouse(resp.data.customHouse);

    console.log(resp.data);
  };

  useEffect(() => {
    getFreights();
  }, []);

  const handleEdit = async (freight, e) => {
    try {
      console.log("teste");
      const body = {
        customHouse,
        commodityValue,
        grossWeight,
        truckType,
        date,
        points,
        origin,
        destiny,
        deadline,
        value,
        description,
        code,
      };

      await axios.put(`http://localhost:3003/freights/update/${id}`, body);
      navigate("freights/all");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Tipo do caminhao"
          value={truckType}
          onChange={(e) => setTruckType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Points"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
        />
        <input
          type="text"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          type="text"
          placeholder="Origem"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destino"
          value={destiny}
          onChange={(e) => setDestiny(e.target.value)}
        />
        <input
          type="text"
          placeholder="Data"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descricao"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Data limite"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <input
          type="text"
          placeholder="Peso"
          value={grossWeight}
          onChange={(e) => setGrossWeight(e.target.value)}
        />
        <input
          type="text"
          placeholder="CoomidtyValue"
          value={commodityValue}
          onChange={(e) => setCommodityValue(e.target.value)}
        />
        <input
          type="text"
          placeholder="customHouse"
          value={customHouse}
          onChange={(e) => setCustomHouse(e.target.value)}
        />
        <button onClick={handleEdit}>Salvar Alteracoes</button>
      </form>
    </div>
  );
};

export default DetailsPageFreights;
