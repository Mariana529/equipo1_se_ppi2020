import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

function LoginRestaurante() {
  return (
    <div class="gr27e  ">
      <br></br>
      <br></br>
      <h1 class="inicio" classN="NXVPg Szr5J  coreSpriteLoggedOutWordmark">
        FAST FOOD{" "}
      </h1>

      <br></br>
      <div class="EPjEi" className="centrar">
        <form class="HmktE" id="loginForm" method="post">
          <div class="                    Igw0E     IwRSH      eGOV_         _4EzTm                                                              kEKum                                                ">
            <div class="-MzZI">
              <div class="_9GP1n   ">
                <label class="f0n8F ">
                  <span class="_9nyy2">Usuario o correo electrónico</span>
                  <input
                    aria-label="Teléfono, usuario o correo electrónico"
                    aria-required="true"
                    autocapitalize="off"
                    autocorrect="off"
                    maxlength="75"
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
            <div class="-MzZI">
              <div class="_9GP1n   ">
                <label class="f0n8F ">
                  <span class="_9nyy2">Contraseña</span>
                  <input
                    aria-label="Contraseña"
                    aria-required="true"
                    autocapitalize="off"
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
            <div class="                    Igw0E     IwRSH      eGOV_         _4EzTm    bkEs3                          CovQj                  jKUp7          DhRcB                                                    ">
              <button
                class="sqdOP  L3NKy   y3zKF     "
                type="submit"
                disabled=""
              >
                <div class="                    Igw0E     IwRSH      eGOV_         _4EzTm                                                                                                              ">
                  <Link to="/RegistrarEditarVerPedidos"> Iniciar sesión</Link>
                </div>
              </button>
            </div>
          </div>
          <br></br>
          <br></br>
          <a class="_2Lks6" href="/accounts/password/reset/" tabindex="0">
            ¿Olvidaste tu contraseña?
          </a>
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
export default LoginRestaurante;
