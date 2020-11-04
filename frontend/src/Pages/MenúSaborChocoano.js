import React from "react";
import { Link } from "react-router-dom";

function MenúSaborChocoano() {
  return (
    <div>
      <h1> Menú</h1>
      <br></br>
      <h2>Comidas</h2>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/Compras">Salmón ... 27.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Bandeja con chicharron... 15.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Robalo en salsa de champiniones... 24.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras"> Bandeja con pollo... 12.500</Link>{" "}
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras"> Bandeja con chorizo... 14.500</Link>{" "}
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras"> Porcion de frijoles... 9.800</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Chicharron con arepa y patacón... 10.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Trucha a la milanesa o al ajillo... 24.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras"> Bandeja con res... 13.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Robalo a la milanesa o al ajillo... 22.900</Link>
      </button>
      <br></br>
      <h2> Bebidas</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras"> Sprite... 2.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Diet Coke/Coca-Cola Light... 2.000 </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras"> Coca-Cola Zero... 2.000</Link>{" "}
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras"> Minute Maid... 2.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras"> Georgia Coffee... 2.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras"> Powerade... 5.00</Link>{" "}
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras"> Del Valle... 2.000</Link>{" "}
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

export default MenúSaborChocoano;
