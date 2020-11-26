import React from "react";
import { Link } from "react-router-dom";

function EditarMiMenú() {
  return (
    <div>
      <br></br>
      <br></br>
      <h1 class="inicio">Aquí puedes editar tu menú</h1>
      <br></br>
      <h3 class="letra">(Este espacio es para que edites tu menú)</h3>
      <br></br>
      <br></br>

      <div className="WZdjL" class="centrar">
        <div class="_9GP1n   ">
          <label class="f0n8F ">
            <span class="_9nyy2">Modificar plato </span>
            <input
              aria-label="Modificar plato"
              aria-required="true"
              autocapitalize="off"
              autocorrect="off"
              maxlength="30"
              name="username"
              type="text"
              class="_2hvTZ pexuQ zyHYP"
              value=""
            />
            <br></br>
            <br></br>
          </label>
          <div class="i24fI"></div>
        </div>
        <br></br>
        <div class="WZdjL">
          <div class="_9GP1n   ">
            <label class="f0n8F ">
              <span class="_9nyy2">Modificar precio </span>
              <input
                aria-label="Nombre precio"
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
          <br></br>
          <br></br>
          <br></br>
          <button className="btn-warning" class="centrar">
            <Link to="/RegistrarEditarVerPedidos"> Atras </Link>
          </button>

          <button className="btn-warning" class="centrar">
            <Link to="/RegistrarEditarVerpedidos">Salvar cambios</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export default EditarMiMenú;
