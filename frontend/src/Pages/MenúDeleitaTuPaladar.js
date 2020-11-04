import React from "react";
import { Link } from "react-router-dom";

function MenúDeleitaTuPaladar() {
  return (
    <div>
      <h1>Menú</h1>
      <br></br>
      <h2>Jugos naturales</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Jugo de mora...2.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Jugo de mandarina...2.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Jugo de tomate...2.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Jugo de maracuya...2.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Jugo de borojo..2.000</Link>
      </button>
      <br></br>
      <h2>Postres</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Postre arequipe...6.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Chocolate...5.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Tres leches con galletas...3.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Postre de mora con mermelada...5.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Pana cotta...6.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Tres leches con pedazos de mango...4.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Postre de cafe...3.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Postre de milo...4.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Merengon...7.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Natilla...3.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Cocada...3.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Tiramisu...5.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Tarta de santiago...6.000</Link>
      </button>
      <br></br>
      <h2>Gaseosas</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Quatro...1.800</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Coca-cola...2.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Colombiana...1.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Postobon...2.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Pepsi...1.400</Link>
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
export default MenúDeleitaTuPaladar;
