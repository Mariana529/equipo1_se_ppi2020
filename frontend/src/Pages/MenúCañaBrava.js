import React from "react";
import { Link } from "react-router-dom";

function MenuCañaBrava() {
  return (
    <div>
      <h1>Menú</h1>
      <br></br>
      <h2>Platos fuertes</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Bandeja paisa...16.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Plato arriero..18.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Viste encebollado...15.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Lengua en salsa criolla...16.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Arriba con pollo...14.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Cazuela de frijoles...14.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Carne asada...16.000</Link>
      </button>
      <br></br>
      <h2>
        <Link to="/Compras">Bebidas</Link>
      </h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Chocolate...2.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Aguapanela...2.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Cafe expreso...2.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Capuchino..2.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Jugos en agua...3.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Jugos en leche...4.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Gaseosa...2.000</Link>
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
export default MenuCañaBrava;
