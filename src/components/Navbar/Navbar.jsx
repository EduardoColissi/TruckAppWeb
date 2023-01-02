import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "./stylesNavbar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Navbar = () => {
  const navigate = useNavigate(-1);
  return (
    <Container>
      <ArrowBackIcon className="icon" onClick={() => navigate(-1)} />
      <div>
        <Link to="/users/all">
          <button>USUARIOS</button>
        </Link>
      </div>
      <div>
        <Link to="/freights/all">
          <button>FRETES</button>
        </Link>
      </div>
    </Container>
  );
};

export default Navbar;
