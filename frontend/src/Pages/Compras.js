import React from "react";
import { Link } from "react-router-dom";

function Compras() {
  return (
    <div>
      <h1 class="inicio">TU PEDIDO</h1>
      <br></br>
      <br></br>
      <br></br>
      <button>+</button>
      <br></br>
      <button>-</button>
      <br></br>
      <button ClassName="btn-warning">
        <Link to="/Fin">Terminar pedido</Link>
      </button>
      <br></br>
      <button ClassName="btn-warning">
        {" "}
        <Link to="/MenúMontañita">Seguir comprando</Link>
      </button>
    </div>
  );
}
export default Compras;
