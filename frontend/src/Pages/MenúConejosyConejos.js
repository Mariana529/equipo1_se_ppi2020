import React from "react";
import { Link } from "react-router-dom";

function MenúConejosyConejos() {
  return (
    <div>
      <h1>Menú</h1>
      <br></br>
      <h2>Desayunos</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">
          Arepa de chocolo con quesito, chorizo ...10.500
        </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">
          Calentado, huevos, arepa, quesito, carne ... 15.000
        </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras"> Calentado, huevos pericos ... 11.000</Link>
      </button>
      <br></br>
      <h2> Bebidas</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras"> Gaseosas postobon 350l ... 2.500 </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras"> Coca-cola 350l ... 2.800</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Jugos naturales en agua ... 3.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras"> Jugos naturales en leche ... 3.800</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras"> Cafe en leche ... 3.000</Link>{" "}
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras"> Capuchino Frío-caliente ... 3.500</Link>
      </button>
      <br></br>
      <h2> Almuerzos </h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras"> Sudado de carne ... 36.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras"> Sancocho de gallina ... 37.000</Link>
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
export default MenúConejosyConejos;
