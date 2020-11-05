import React from "react";
import { Link } from "react-router-dom";

function MenúMiFogónLeñero() {
  return (
    <div>
      <h1>Menú</h1>
      <br></br>
      <h2>Menú del dia 12.000</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">
          Bandejas/carnes a la plancha:pollo, res, cerdo, chcharron. chorizo
        </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Bebidas:guarapo, mazamorra </Link>
      </button>
      <br></br>
      <h2>Plato especial del dia</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">
          Sobre barriga acompañado de arroz, ensalada, aguacate, arepa{" "}
        </Link>
      </button>
      <ul class="rating">
        <li>
          <a href="#" title="1 Star">
            ⭐
          </a>
        </li>
        <li>
          <a href="#" title="2 Stars">
            ⭐
          </a>
        </li>
        <li>
          <a href="#" title="3 Stars">
            ⭐
          </a>
        </li>
        <li>
          <a href="#" title="4 Stars">
            ⭐
          </a>
        </li>
        <li>
          <a href="#" title="5 Stars">
            ⭐
          </a>
        </li>
      </ul>
      <br></br>
      <br></br>
      <button className="btn-warning" class="Atras">
        <Link to="/Restaurantes"> Atras </Link>
      </button>
    </div>
  );
}
export default MenúMiFogónLeñero;
