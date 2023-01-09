import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditFreights = () => {
  const { id } = useParams();

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

  const [freights, setFreights] = useState([]);

  const navigate = useNavigate();

  const handleEdit = async () => {
    try {
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
    } catch (error) {
      console.log(error);
      alert(error);
    }
    navigate("/freights/all");
  };

  const getFreights = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:3003/freights/all/freight/${id}`
      );

      setDescription(resp.data.description);
      setCode(resp.data.code);
      setValue(resp.data.value);
      setDate(resp.data.date);
      setDeadline(resp.data.deadline);
      setDestiny(resp.data.destiny);
      setOrigin(resp.data.origin);
      setPoints(resp.data.points);
      setTruckType(resp.data.truckType);
      setGrossWeight(resp.data.grossWeight);
      setCommodityValue(resp.data.commodityValue);
      setCustomHouse(resp.data.customHouse);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFreights();
  }, []);

  return (
    <div>
      <div>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={destiny}
          onChange={(e) => setDestiny(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={truckType}
          onChange={(e) => setTruckType(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={grossWeight}
          onChange={(e) => setGrossWeight(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={commodityValue}
          onChange={(e) => setCommodityValue(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={customHouse}
          onChange={(e) => setCustomHouse(e.target.value)}
        />
      </div>

      <button onClick={handleEdit}>Salvar Alterações</button>
    </div>
  );
};

export default EditFreights;
