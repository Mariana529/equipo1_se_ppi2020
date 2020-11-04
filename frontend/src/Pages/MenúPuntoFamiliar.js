import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function MenúPuntoFamiliar() {
  return (
    <div>
      <h1>Menú</h1>
      <br></br>
      <h2>Nuestros productos recomendados</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">
          Hamburguesa hecha en casa, doble carne... 11.000
        </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras"> Hamburguesa sencilla hecha en casa... 9.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras"> Hambueguesa súper... 16.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras"> Perro caliente, sencillo... 7.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras"> Perro especial con tocineta... 9.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/Compras">Punta de anca... 17.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/Compras">Churrasco... 16.0000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras"> Costillas BBQ... 16.0000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/Compras"> Chuleta de cerdo... 15.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras"> Chuzo de pollo o cefrdo... 10.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras"> Chorizo de cerdo... 10.000</Link>
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
export default MenúPuntoFamiliar;
