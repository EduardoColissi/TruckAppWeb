import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { CardContainer, Container } from "./stylesUserAll";
import { Link, useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const UsersAll = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const resp = await axios.get("http://localhost:3003/users/all");
    setUsers(resp.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleDelete = async (user) => {
    const resp = await axios.delete(
      `http://localhost:3003/users/delete/${user.id}`
    );
    getUsers();
    console.log(resp);
  };

  const UserComponents = ({ users }) => {
    return (
      <>
        <Container>
          {users &&
            users.map((user) => {
              return (
                <CardContainer key={user.id}>
                  <Link to={`/users/update/${user.id}`}>
                    <EditIcon />
                  </Link>
                  <DeleteIcon
                    className="icon"
                    onClick={() => handleDelete(user)}
                  />
                  <Link to={`user/${user.id}`}>
                    <h2>Nome: {user.name}</h2>
                    <p>CPF: {user.cpf}</p>
                  </Link>
                </CardContainer>
              );
            })}
        </Container>
      </>
    );
  };

  return (
    <div>
      <UserComponents users={users}></UserComponents>
    </div>
  );
};

export default UsersAll;
