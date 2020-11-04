import React from "react";
import { Link } from "react-router-dom";
function HomeRestaurante() {
  return (
    <div>
      <br></br>
      <br></br>
      <h1 class="bienvenida">BIENVENIDO</h1>
      <h1 class="bienvenida">FAST FOOD</h1>
      <br></br>
      <br></br>
      <button type="button" class="btn btn-outline-primary">
        <Link to="RegistrarRestaurante"> Registro de restaurante</Link>
      </button>
      <br></br>
      <br></br>
      <button type="button" class="btn btn-outline-primary">
        <Link to="LoginRestaurante">Login</Link>
      </button>

      <br></br>
      <br></br>
      <button type="button" className="btn btn-outline-primary" class="Atras">
        <Link to="/Home"> Atras </Link>
      </button>
    </div>
  );
}

export default HomeRestaurante;
