import React from "react";
import { Link } from "react-router-dom";

function Compras() {
  return (
    <div>
      <h1 class="inicio">TU PEDIDO</h1>

      <button ClassName="btn-warning">
        <Link to="/Fin">Terminar pedido</Link>
      </button>
      <button>+</button>
      <button>-</button>
      <button ClassName="btn-warning">
        {" "}
        <Link to="/Restaurantes">Seguir comprando</Link>
      </button>
    </div>
  );
}
export default Compras;
