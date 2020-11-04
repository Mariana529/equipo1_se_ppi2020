import React from "react";
import Imagenes from "../Imagenes/cuadro2.jpg";
import { Link } from "react-router-dom";

function VerMisPedidos() {
  return (
    <div>
      <br></br>
      <h1 class="inicio">ESTOS SON TUS PEDIDOS</h1>
      <br></br>
      <br></br>
      <h1>PEDIDO #1</h1>
      <div className="cuadro">
        <img src={Imagenes} class="" width="70" alt="cuadro2" />
      </div>
      <br></br>
      <br></br>
      <h1>PEDIDO #2</h1>
      <div className="cuadro">
        <img src={Imagenes} class="" width="70" alt="cuadro2" />
      </div>
      <br></br>
      <br></br>
      <h1>PEDIDO #3</h1>
      <div className="cuadro">
        <img src={Imagenes} class="" width="70" alt="cuadro2" />
      </div>
      <br></br>
      <br></br>
      <h1>PEDIDO #4</h1>
      <div className="cuadro">
        <img src={Imagenes} class="" width="70" alt="cuadro2" />
      </div>
      <br></br>
      <br></br>
      <h1>PEDIDO #5</h1>
      <div className="cuadro">
        <img src={Imagenes} class="" width="70" alt="cuadro2" />
      </div>
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
