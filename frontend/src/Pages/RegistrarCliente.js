import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function RegistraCliente() {
  return (
    <div class="gr27e  ">
      <br></br>
      <br></br>

      <h1 class="inicio" classN="NXVPg Szr5J  coreSpriteLoggedOutWordmark">
        FAST FOOD
      </h1>
      <div class="P8adC" className="centrar">
        <form class="XFYOY" method="post">
          <div class="                    Igw0E     IwRSH      eGOV_         _4EzTm    bkEs3                          CovQj                  jKUp7          DhRcB                                                    "></div>

          <div class="WZdjL" className="registrarcentar ">
            <div class="_9GP1n   ">
              <label class="f0n8F ">
                <span class="_9nyy2">
                  <br></br>
                  <br></br>
                  Número de celular o correo electrónico
                </span>
                <input
                  aria-label="Número de celular o correo electrónico"
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
                <span class="_9nyy2">Nombre completo </span>
                <input
                  aria-label="Nombre completo"
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
                <span class="_9nyy2">Nombre de usuario </span>
                <input
                  aria-label="Nombre de usuario"
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
          </div>
          <br></br>
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
          <div>
            <br></br>
            <br></br>
            <div class="                    Igw0E     IwRSH      eGOV_         _4EzTm    bkEs3                          CovQj                  jKUp7          DhRcB                                                    ">
              <button
                class="sqdOP  L3NKy   y3zKF     "
                disabled=""
                type="submit"
              >
                {" "}
                <Link to="/Restaurantes">Registrate</Link>{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
      <br></br>
      <br></br>
      <button className="btn-warning" class="Atras">
        <Link to="/Homecliente"> Atras </Link>
      </button>
    </div>
  );
}

export default RegistraCliente;
