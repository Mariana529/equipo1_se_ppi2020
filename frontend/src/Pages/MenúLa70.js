import React from "react";
import { Link } from "react-router-dom";

function MenúLa70() {
  return (
    <div>
      <h1>Menu</h1>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Hamburguesa grande...13.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Hamburguesa mediana..9.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Hamburguesa pequeña...6.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Derretidos...10.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Chuzos:res, cerdo o pollo...12.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Palitos de queso...1.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Tortas de chocolo...500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Perros...8.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Chorizos...2.200</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Empanadas...500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Buñuelos...500</Link>
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
export default MenúLa70;
