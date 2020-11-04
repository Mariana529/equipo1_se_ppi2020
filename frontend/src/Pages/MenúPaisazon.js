import React from "react";
import { Link } from "react-router-dom";

function MenúPaisazon() {
  return (
    <div>
      <h1>Menú</h1>
      <br></br>
      <h2>Desayunos</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Sarten de calentado...16.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Desayuno chocolo..11.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Desayuno tela...9.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Bowul de frutas...10.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Porcion de frutas...6.900</Link>
      </button>
      <br></br>
      <h2>Para compartir</h2>
      <button className="btn-warning">
        <Link to="/Compras">Picada x2...42.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Picada x4...64.900</Link>
      </button>
      <br></br>
      <h2>Platos fuertes</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Casuela de frijoles..24.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Pollo a la placha...23.000</Link>
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
      <h2>Refrescos</h2>
      <button className="btn-warning">
        <Link to="/Compras">Sprite...2.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Diet coke/coca-cola ligth...2.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Coca.cola cero...2.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Minute maid...2.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Georgia coffe...3.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Powerade...3.500</Link>
      </button>

      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Del valle...1.500</Link>
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
export default MenúPaisazon;
