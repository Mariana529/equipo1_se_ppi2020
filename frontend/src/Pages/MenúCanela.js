import React from "react";
import { Link } from "react-router-dom";

function MenuCanela() {
  return (
    <div>
      <h1>Menu</h1>
      <br></br>
      <h2>Entradas</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Crema de tomate...8.300</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Porcion de pancitos...5.400</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Mixtu-chips...6.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Pinchitos napolitanos...8.800</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Rollitos pesto...10.200</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Rollitos peperoni...11.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Canastatilla de sal...9.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">frutos del sarten...20.000</Link>
      </button>
      <br></br>
      <h2>Lasañas</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Boloñesa...21.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Pollo con champiñones...22.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Mixta...24.800</Link>
      </button>
      <br></br>
      <h2>Sopas</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Fagioll...12.800</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Del campo...13.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Mexicana...16.000</Link>
      </button>
      <br></br>
      <h2>Wrap's</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Jamon y pepperoni...19.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Vegetales...18.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Pollo...18.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Mixta...21.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Carne...19.000</Link>
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
export default MenuCanela;
