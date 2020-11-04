import React from "react";
import { Link } from "react-router-dom";

function MenuHowFanExpress() {
  return (
    <div>
      <h1>Menú</h1>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Patacon con hgao y guacamole...12.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Empanadas...500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Chorizo con arepa....5.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Papas en fosforo...4.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Pan integral...3.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Palitos de queso....2.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Tostadas de pollo....5.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Pescado en salsa de mora...8.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Tortilla de cilantro y requeson...7.000</Link>
      </button>
      <br></br>
      <h2>Jugos</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Jugo de borojo...2.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Jugo de granadilla...2.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Jugo de maracuya...2.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Jugo de mora...2.500</Link>
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
export default MenuHowFanExpress;
