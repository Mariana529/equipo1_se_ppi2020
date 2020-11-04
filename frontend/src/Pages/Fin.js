import React from "react";
import { Link } from "react-router-dom";

function fin() {
  return (
    <div>
      <h1 class="inicio">GRACIAS POR TU COMPRA :)</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <button className="btn-warning">
        <Link to="/Home"> Salir </Link>
      </button>
    </div>
  );
}
export default fin;
