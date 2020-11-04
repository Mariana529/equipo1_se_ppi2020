import React from "react";
import { Link } from "react-router-dom";

function MenuEnSanta() {
  return (
    <div>
      <h1>Menu</h1>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Paella</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Infuciones de te verde, te negro, cafe</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Huevos al gusto</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Sopa de pollo</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Crepes rellenos de nutella</Link>
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
export default MenuEnSanta;
