import React from "react";
import { Link } from "react-router-dom";
import logo from "../Imagenes/logo.png";

function Home() {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <h1 class="inicio">INGRESAR COMO:</h1>
      <br></br>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/Homecliente"> Usuario Cliente </Link>{" "}
      </button>
      <br></br>
      <br></br>
      <button className="btn-warning">
        <Link to="/HomeRestaurante">Usuario Restaurante</Link>
      </button>
      <br></br>
      <br></br>
      <img
        src={logo}
        className="img"
        class="img-thumbnail"
        width="180"
        alt="logo"
      />
    </div>
  );
}

export default Home;
