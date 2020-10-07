import React from "react";
import { Link } from "react-router-dom";

function RegistrarEditarVerPedidos() {
  return (
    <div>
      <br></br>
      <button className="btn-warning">
        <Link to="/CrearMiMenú">REGISTRAR MENÚ</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/EditarMiMenú">EDITAR MENÚ</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/VerMisPedidos">VER PEDIDOS</Link>
      </button>
    </div>
  );
}
export default RegistrarEditarVerPedidos;
