import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Ingresar como:</h1>

      <button className="btn-warning">
        {" "}
        <Link to="/Homecliente"> Usuario Cliente </Link>{" "}
      </button>
      <br></br>
      <button className="btn-warning">Usuario Restaurante</button>
    </div>
  );
}

export default Home;
