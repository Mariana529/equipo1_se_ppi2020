import React from "react";
import { Link } from "react-router-dom";
function Homecliente() {
  return (
    <div>
      <button className="btn-warning">
        <Link to="/RegistrarCliente"> Registro de usuario</Link>
      </button>
      <button className="btn-warning">
        <Link to="/Logincliente">Login</Link>
      </button>
      <br></br>
      <h1>FAST FOOD</h1>
      <h1>BIENVENIDO</h1>
    </div>
  );
}

export default Homecliente;
