import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { CardContainer, Container } from "./stylesUserAll";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const UsersAll = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const resp = await axios.get("http://localhost:3003/users/all");
    setUsers(resp.data);
    console.log(resp.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const UserComponents = ({ users }) => {
    return (
      <>
        <Container>
          {users &&
            users.map((user) => {
              return (
                <CardContainer key={user.id}>
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
