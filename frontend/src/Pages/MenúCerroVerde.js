import React from "react";
import { Link } from "react-router-dom";

function MenuCerroVerde() {
  return (
    <div>
      <h1>Menu</h1>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Salchipapa</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Hamburguesa</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Arroz mixto</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Bagre</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Picada</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Carnes:cerdo, res, pollo</Link>
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
export default MenuCerroVerde;
