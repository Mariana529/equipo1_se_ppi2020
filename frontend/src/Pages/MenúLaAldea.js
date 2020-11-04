import React from "react";
import { Link } from "react-router-dom";

function MenuLaAldea() {
  return (
    <div>
      <h1>Menú</h1>
      <br></br>
      <h2>Entradas</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Arepa de chocolo con quesito....7.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Empanadas x6...6.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Patacones x8...10.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Porcion de chorizo...10.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Porcion de chicharron...10.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Choripapas...12.800</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Porcion papas a la francesa...5.000</Link>
      </button>
      <br></br>
      <h2>Platos fuertes</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Cazuela de frijoles...24.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Pollo a la plancha...23.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Solomito...29.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Sancocho...25.000</Link>
      </button>
      <br></br>
      <h2>Bebidas</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Coca-cola...2.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Premio...1.800</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Uva...2.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Bretaña...2.000</Link>
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
export default MenuLaAldea;
