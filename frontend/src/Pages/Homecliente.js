import React from "react";
import { Link } from "react-router-dom";
function Homecliente() {
  return (
    <div>
      <br></br>
      <br></br>
      <button className="btn-warning">
        <Link to="/RegistrarCliente"> Registro de usuario</Link>
      </button>
      <br></br>
      <br></br>
      <button className="btn-warning">
        <Link to="/Logincliente">Login</Link>
      </button>
      <br></br>
      <br></br>
      <h1 class="bienvenida">FAST FOOD </h1>
      <h1 class="bienvenida">BIENVENIDO</h1>
      <br></br>
      <br></br>
      <button className="btn-warning">
        <Link to="/Home"> Atras </Link>
      </button>
    </div>
  );
}

export default Homecliente;
