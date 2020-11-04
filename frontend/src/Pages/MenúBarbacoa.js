import React from "react";
import { Link } from "react-router-dom";

function MenuBarbacoa() {
  return (
    <div>
      <h1>Menu</h1>
      <h2>Almuerzos</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Bandeja paisa</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Bandeja con chicharron</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Bandeja con chorizo</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Chicharron con arepa y patacon</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Bandeja de pollo</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Bandeja de res</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Bandeja de cerdo</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Trucha</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Robalo</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Salmon</Link>
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
      <button className="btn-warning">
        <Link to="/Restaurantes"> Atras </Link>
      </button>
    </div>
  );
}
export default MenuBarbacoa;
