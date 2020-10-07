import React from "react";
import { Link } from "react-router-dom";

function MenuMalteadasEve() {
  return (
    <div>
      <h1>Menú</h1>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Cemosita malteada de fresa</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Malteada de chocolate</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/Compras">
          Frape de coco con un toque de cafeina para estar alerta
        </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/Compras">Merengada de brownie y baileys chocolat luxe</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/Compras">Batido de vainilla y capuchino</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/Compras">
          Ensalada de frutas con leche condensada y saborrr
        </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/Compras">Frappe de nutella</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/Compras">
          Millkshake tropi-caliente: zumo de piña con helado de coco
        </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/Compras">
          Zumo de naranja natural con helado de vainilla
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
    </div>
  );
}
export default MenuMalteadasEve;
