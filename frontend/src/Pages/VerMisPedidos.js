import React from "react";

import { Link } from "react-router-dom";

function VerMisPedidos() {
  return (
    <div>
      <br></br>
      <h1 class="inicio">ESTOS SON TUS PEDIDOS</h1>
      <br></br>
      <br></br>
      <h1>PEDIDO #1</h1>
      <h2>pizza...20.000</h2>
      <button className="btn-warning">Despachar</button>
      <br></br>
      <br></br>
      <h1>PEDIDO #2</h1>
      <h2>Calentadocon carne y huevo...13.500</h2>
      <button className="btn-warning">Despachar</button>
      <br></br>
      <br></br>
      <h1>PEDIDO #3</h1>
      <h2>Bandeja con chicharron...15.500</h2>
      <button className="btn-warning">Despachar</button>
      <br></br>
      <br></br>
      <h1>PEDIDO #4</h1>
      <h2>Tipico la montañita...24.900</h2>
      <button className="btn-warning">Despachar</button>
      <br></br>
      <br></br>
      <h1>PEDIDO #5</h1>
      <h2>Huevos al gusto...8.500</h2>
      <button className="btn-warning">Despachar</button>
      <br></br>
      <button className="btn-warning">
        <Link to="/RegistrarEditarVerPedidos"> Atras </Link>
      </button>
      <button className="btn-warning">
        <Link to="/Home"> Salir </Link>
      </button>
    </div>
  );
}
export default VerMisPedidos;
