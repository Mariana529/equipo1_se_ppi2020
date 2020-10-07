import React from "react";
import { Link } from "react-router-dom";
function HomeRestaurante() {
  return (
    <div>
      <button ClassName="btn-warning">
        <Link to="RegistrarRestaurante"> Registro de restaurante</Link>
      </button>
      <button className="btn-warning">
        <Link to="LoginRestaurante">Login</Link>
      </button>
      <br></br>
      <h1>BIENVENIDO</h1>
      <h1>FAST FOOD</h1>
    </div>
  );
}

export default HomeRestaurante;
