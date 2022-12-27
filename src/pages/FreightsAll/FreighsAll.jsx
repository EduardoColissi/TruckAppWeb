import React, { useEffect, useState } from "react";
import {
  BtnCreate,
  CardContainer,
  Container,
  LoaderContainer,
} from "./stylesFreightsAll";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Input, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const FreighsAll = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);

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
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const getFreights = async () => {
    setLoading(true);
    const resp = await axios.get("http://localhost:3003/freights/all");
    setLoading(false);
    setFreights(resp.data);
    console.log(resp.data);
  };

  useEffect(() => {
    getFreights();
  }, []);

  const handleSubmit = async () => {
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

      await axios.post("http://localhost:3003/freights/create", body);

      setOpen(false);
      getFreights();
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const handleDelete = async (freight) => {
    const resp = await axios.delete(
      `http://localhost:3003/freights/delete/${freight.id}`
    );
    getFreights();
    console.log(resp);
  };

  const UserComponents = ({ freights }) => {
    return (
      <>
        <Container>
          {loading ? (
            <LoaderContainer>
              <div className="spinner"></div>
            </LoaderContainer>
          ) : (
            freights.map((freight) => {
              return (
                <CardContainer key={freight.id}>
                  <Link to={`/freights/update/${freight.id}`}>
                    <EditIcon />
                  </Link>
                  <DeleteIcon onClick={() => handleDelete(freight)} />
                  <h2>Code: {freight.code}</h2>
                  <p>Origem: {freight.origin}</p>
                  <p>Destino: {freight.destiny}</p>
                  <p>Valor: R$ {freight.value}</p>
                </CardContainer>
              );
            })
          )}
        </Container>
      </>
    );
  };

  return (
    <div>
      <Button onClick={handleOpen}>+ Create</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Crie um frete
          </Typography>
          <Input
            placeholder="Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            defaultValue={code}
            required
          />
          <Input
            placeholder="Tipo do caminhao"
            value={truckType}
            onChange={(e) => setTruckType(e.target.value)}
          />
          <Input
            placeholder="Points"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
          />
          <Input
            placeholder="Valor"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Input
            placeholder="Origem"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
          <Input
            placeholder="Destino"
            value={destiny}
            onChange={(e) => setDestiny(e.target.value)}
          />
          <Input
            placeholder="Data"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Input
            placeholder="Descricao"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            placeholder="Data limite"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
          <Input
            placeholder="Peso"
            value={grossWeight}
            onChange={(e) => setGrossWeight(e.target.value)}
          />
          <Input
            placeholder="CoomidtyValue"
            value={commodityValue}
            onChange={(e) => setCommodityValue(e.target.value)}
          />
          <Input
            placeholder="customHouse"
            value={customHouse}
            onChange={(e) => setCustomHouse(e.target.value)}
          />
          <Button onClick={handleSubmit}>Criar</Button>
        </Box>
      </Modal>
      <UserComponents freights={freights}></UserComponents>
    </div>
  );
};

export default FreighsAll;
