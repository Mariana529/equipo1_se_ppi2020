import React from "react";
import { Link } from "react-router-dom";
import Imagen1 from "../Imagenes/img1.jpg";

function Home() {
  return (
    <div styles={{ backgroundImage: `url(${Imagen1})` }}>
      <h1>Ingresar como:</h1>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/Homecliente"> Usuario Cliente </Link>{" "}
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/HomeRestaurante">Usuario Restaurante</Link>
      </button>
    </div>
  );
}

export default Home;
