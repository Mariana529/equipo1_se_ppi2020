import React from "react";
import { Link } from "react-router-dom";

function MenuAsadorElPlacer() {
  return (
    <div>
      <h1>Menú</h1>
      <br></br>
      <h2>Almuerzos</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Pizza de pollo...8.000 </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Carne de res en su jugo....15.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Crepas poblanas...7.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Lasaña con carne molida....12.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Espagueti con albondigas...11.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Rollitos de pollo...13.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Pastel de espagueti...8.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras"> Ensalada cremosa de surimi...12.000</Link>
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
        <Link to="/Compras">Pepsi...1.400</Link>
      </button>
      <br></br>
      <h2>Postres</h2>
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
        <Link to="/Compras">Natilla...3.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Cocada...3.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Turamisu...5.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Tarta de santiago...6.000</Link>
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
export default MenuAsadorElPlacer;
