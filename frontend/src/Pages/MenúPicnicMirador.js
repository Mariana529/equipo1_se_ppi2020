import React from "react";
import { Link } from "react-router-dom";

function MenuPicnicMirador() {
  return (
    <div>
      <h1>Menu</h1>
      <br></br>
      <h2>Entradas</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Empanadas...500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Nuhhest de pollo con papas francesas...4.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Palo de queso..2.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Patacon con hogao...4.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Porcion papa francesa...3.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Salchipapas...5.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">torta de chocolo...2.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Yuca frita x4...4.000</Link>
      </button>
      <br></br>
      <h2>Especiales</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">
          Chuzo de pollo con papas a la francesa...10.000
        </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">
          Chuzo de carne con papas a la francesa...10.000
        </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">
          Carne, cerdo, ensalada y papa francesa...12.000
        </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">
          Carne de res, ensalada y papa francesa...12.000
        </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">
          Picada para dos(res, cerdo, chicharron, chorizo, patacon, papa a la
          francesa y arepa....35.000
        </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Chicharron con arepa...6.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Chrizo, arepa y quesito....5.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Arepa blanca con quesito...3.000</Link>
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
export default MenuPicnicMirador;
