import React from "react";
import { Link } from "react-router-dom";

function RegistrarEditarVerPedidos() {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button className="btn-warning">
        <Link to="/RegistrarMiMenú">REGISTRAR MENÚ</Link>
      </button>
      <br></br>
      <br></br>
      <button className="btn-warning">
        <Link to="/EditarMiMenú">EDITAR MENÚ</Link>
      </button>
      <br></br>
      <br></br>
      <button className="btn-warning">
        <Link to="/VerMisPedidos">VER PEDIDOS</Link>
      </button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button className="btn-warning">
        <Link to="/HomeRestaurante"> Atras </Link>
      </button>
    </div>
  );
}
export default RegistrarEditarVerPedidos;
