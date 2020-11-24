import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function RegistrarRestaurante() {
  return (
    <div class="gr27e  ">
      <br></br>
      <br></br>

      <h1 class="NXVPg Szr5J  coreSpriteLoggedOutWordmark">Fast Food</h1>
      <br></br>
      <br></br>
      <div class="P8adC">
        <form class="XFYOY" method="post">
          <div class=" Igw0E IwRSH eGOV_  _4EzTm bkEs3 CovQj jKUp7 DhRcB  "></div>

          <div class="WZdjL" className="centrar">
            <div class="_9GP1n   ">
              <label class="f0n8F ">
                <span class="_9nyy2">Nombre restaurante </span>
                <input
                  aria-label="Nombre restaurante"
                  aria-required="true"
                  autocapitalize="off"
                  autocomplete="tel"
                  autocorrect="off"
                  name="emailOrPhone"
                  type="text"
                  class="_2hvTZ pexuQ zyHYP"
                  value=""
                />
              </label>
              <div class="i24fI"></div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div class="WZdjL">
            <div class="_9GP1n   ">
              <label class="f0n8F ">
                <span class="_9nyy2">Teléfono </span>
                <input
                  aria-label="Email"
                  aria-required="false"
                  autocapitalize="sentences"
                  autocorrect="off"
                  name="fullName"
                  type="text"
                  class="_2hvTZ pexuQ zyHYP"
                  value=""
                />
              </label>
              <div class="i24fI"></div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div class="WZdjL">
            <div class="_9GP1n   ">
              <label class="f0n8F ">
                <span class="_9nyy2">Correo electrónico </span>
                <input
                  aria-label="Contraseña"
                  aria-required="true"
                  autocapitalize="off"
                  autocomplete="new-password"
                  autocorrect="off"
                  name="password"
                  type="password"
                  class="_2hvTZ pexuQ zyHYP"
                  value=""
                />
              </label>
              <div class="i24fI"></div>
            </div>
          </div>
          <br></br>
          <div class="WZdjL">
            <div class="_9GP1n   ">
              <label class="f0n8F ">
                <span class="_9nyy2">Contraseña </span>
                <input
                  aria-label="Contraseña"
                  aria-required="true"
                  autocapitalize="off"
                  autocomplete="new-password"
                  autocorrect="off"
                  name="password"
                  type="password"
                  class="_2hvTZ pexuQ zyHYP"
                  value=""
                />
              </label>
              <div class="i24fI"></div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div>
            <div class=" Igw0E IwRSH eGOV_  _4EzTm  bkEs3 CovQj  jKUp7 DhRcB ">
              <button class="sqdOP L3NKy y3zKF " disabled="" type="submit">
                <Link to="/RegistrarEditarVerPedidos"> Crear </Link>
              </button>
            </div>
          </div>
        </form>
      </div>
      <br></br>
      <br></br>
      <button className="btn-warning" class="Atras">
        <Link to="/HomeRestaurante"> Atras </Link>
      </button>
    </div>
  );
}
export default RegistrarRestaurante;
