import React from "react";
import { Link } from "react-router-dom";

function MenúEstaderoLaRosita() {
  return (
    <div>
      <h1>Menú</h1>
      <br></br>
      <h2>Platos Fuertes</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Picada x2 42900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Picada x4 64900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Sancocho 25000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Pollo a la plancha 23000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Solo mito 29900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">cazuela de frijoles 24000</Link>
      </button>
      <br></br>
      <h2>Desayunos</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Sartén de calentado 16000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Bowl de frutas 10900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Desayuno chocolo 11900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Porción de frutas 6900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Desayuno tela 9900</Link>
      </button>
      <br></br>
      <h2>Postres</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Postre de mora con mermelada 5000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Postre de cafe 3500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Panna cotta 65000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Postre arepquipe 6000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Chocolate 5000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Tres leches con galleta 3000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Tres leches con pedazos de mango 4000</Link>
      </button>
      <br></br>
      <h2>Bbidas</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Jugo de naranja 6200</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Jugo natural agua 5600</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Jugo natural leche 5900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Botella agua 4000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Gatorade 4400</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Gaseosa 4400</Link>
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
export default MenúEstaderoLaRosita;
