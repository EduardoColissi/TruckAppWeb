import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [numCelular, setNumCelular] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [licensePlate, setLicensePlate] = useState("");

  const handleEdit = async () => {
    try {
      const body = {
        name,
        cpf,
        numCelular,
        vehicleType,
        licensePlate,
      };

      await axios.put(`http://localhost:3003/users/update/${id}`, body);
    } catch (error) {
      console.log(error);
      alert(error);
    }
    navigate("/users/all");
  };

  const getUsers = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:3003/users/all/user/${id}`
      );
      setLicensePlate(resp.data.licensePlate);
      setVehicleType(resp.data.vehicleType);
      setNumCelular(resp.data.numCelular);
      setCpf(resp.data.cpf);
      setName(resp.data.name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div>
        <label>Nome: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label> CPF: </label>
        <input
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
      </div>
      <div>
        <label>Numero de celular: </label>
        <input
          type="text"
          value={numCelular}
          onChange={(e) => setNumCelular(e.target.value)}
        />
      </div>
      <div>
        <label>Tip do veiculo: </label>
        <input
          type="text"
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
        />
      </div>
      <div>
        <label>Placa do veiculo: </label>
        <input
          type="text"
          value={licensePlate}
          onChange={(e) => setLicensePlate(e.target.value)}
        />
      </div>

      <button onClick={handleEdit}>Salvar Alterações</button>
    </div>
  );
};

export default EditUser;
