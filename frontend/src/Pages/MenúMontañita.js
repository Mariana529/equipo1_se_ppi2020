import React from "react";
import { Link } from "react-router-dom";

function MenúMontañita() {
  return (
    <div>
      <h1>Menú</h1>
      <br></br>
      <h2>Desayunos</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Calentado con carne y huevo...13.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Calentado con chicharron y huevo..15.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Calentado con chorizo y huevo...14.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Calentado con huevos...10.800</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Huevos rancheros..9.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Huevos al gusto...85.00</Link>
      </button>
      <br></br>
      <h2>Tipicos</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Tipico la montañita...24.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Bandeja con chicharron..15.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Bandeja con chorizo..14.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Porcion de frijoles..9.800</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Chicharron can arepa y patacon...10.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Bandeja con pollo..12.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Bandeja con res...13.500</Link>
      </button>
      <br></br>
      <h2>Pescados</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Trucha a la milanesa o al ajilo..24.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Robalo a la milanesa o al ajilo...22.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Robalo en salsa de champiñones..24.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Salmon..27.900</Link>
      </button>
      <br></br>
      <h2>Menu Infantil</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">
          Nuggets de pollo con papas a la francesa..11.500
        </Link>
      </button>
      <br></br>
      <button className="btn-warning" class="Atras">
        <Link to="/Compras">Salchipapa..13.500</Link>
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
export default MenúMontañita;
