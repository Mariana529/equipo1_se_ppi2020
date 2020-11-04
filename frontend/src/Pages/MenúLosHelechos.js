import React from "react";
import { Link } from "react-router-dom";

function MenúLosHelechos() {
  return (
    <div>
      <h1>Menú</h1>
      <br></br>
      <h2>Desayunos</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Sarten de calentado....10.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Desayuno chocolo...11.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">desayuno tela...9.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Bowl de frutas...10.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Porcion de frutas...6.900</Link>
      </button>
      <br></br>
      <h2>Pltos fuertes</h2>
      <button className="btn-warning">
        <Link to="/Compras">Cazuela de frijoles....24.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Pollo a la plancha..23.000</Link>
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
      <h3>Para compartir</h3>
      <button className="btn-warning">
        <Link to="/Compras">Picada x2...24.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Picada x4...64.900</Link>
      </button>
      <br></br>
      <h2>Bebidas Alcoholicas</h2>
      <button className="btn-warning">
        <Link to="/Compras">Kagemeister</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Baileys</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Khilibniy</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Jack daniels</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Absolut</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Captain morgan</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Red star er guo</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Baggiper united</Link>
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
export default MenúLosHelechos;
