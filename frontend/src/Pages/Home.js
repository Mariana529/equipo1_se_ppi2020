import React from "react";
import { Link } from "react-router-dom";

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
    </div>
  );
}

export default Home;
