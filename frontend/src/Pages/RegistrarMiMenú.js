import React from "react";
import { Link } from "react-router-dom";

function RegistrarMiMenú() {
  return (
    <div>
      <br></br>
      <h1 class="inicio">ESTE ES MI MENÚ</h1>
      <br></br>
      <h3 class="letra">(Este espacio es para que crees tu menú)</h3>
      <br></br>

      <div className="WZdjL" class="centrar">
        <div class="_9GP1n">
          <label class="f0n8F ">
            <span class="_9nyy2">Nombre del plato </span>
            <input
              aria-label="Nombre del plato"
              aria-required="true"
              autocapitalize="off"
              autocorrect="off"
              maxlength="30"
              name="username"
              type="text"
              class="_2hvTZ pexuQ zyHYP"
              value=""
            />
          </label>
          <div class="i24fI"></div>
        </div>
        <br></br>
        <div class="WZdjL">
          <div class="_9GP1n   ">
            <label class="f0n8F ">
              <span class="_9nyy2">Precio </span>
              <input
                aria-label="Precio"
                aria-required="true"
                autocapitalize="off"
                autocorrect="off"
                maxlength="30"
                name="username"
                type="text"
                class="_2hvTZ pexuQ zyHYP"
                value=""
              />
            </label>
            <div class="i24fI"></div>

            <button className="btn-warning" class="centrar">
              <Link to="/RegistrarEditarVerPedidos"> Atras </Link>
            </button>

            <button className="btn-warning" class="centrar">
              <Link to="/RegistrarEditarVerpedidos">Guardar</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegistrarMiMenú;
