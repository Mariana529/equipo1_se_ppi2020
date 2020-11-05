import React from "react";
import { Link } from "react-router-dom";

function MenuCesarCocina() {
  return (
    <div>
      <h1>Menú</h1>
      <br></br>
      <h2>Almuerzos</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Bandeja paisa...16.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Plato arriero...18.000</Link>
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
        <Link to="/Compras">Cazuela de frijoles...14.000</Link>
      </button>
      <br></br>
      <h2>Postres</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Torta de chocolate</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Tiramisu</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Crema de papaya</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Merengue</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Cholado</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Buñuelos de viento</Link>
      </button>
      <br></br>
      <h2>Comidas rapidas</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Hamburguesa...5.000 y 7.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Chuzos...10.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Arepaburguer...5.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">perra...7.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Perro...4.000 y 5.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Carne desmechada...6.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Salchipapas...5.000 y 10.000</Link>
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
export default MenuCesarCocina;
