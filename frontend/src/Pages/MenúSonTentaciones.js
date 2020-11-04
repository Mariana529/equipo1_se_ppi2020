import React from "react";
import { Link } from "react-router-dom";

function ManúSonTentaciones() {
  return (
    <div>
      <h1>Menú</h1>
      <br></br>
      <h2>Comidas</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Arepa con carne asada y queso 8000 </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Pan con chocolate 3000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Arepa con quesito 5000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Calentado de frijoles 7000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Arepa con hogao 6000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Arepa con chorizo 7000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Arepa con huevo revuelto 4000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Tostada de pollo 12000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Banderillas de carne molida 15000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Chilaquiles rellenos 14000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Pescado en salsa de mora 7000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Tortillaa dw cilantro y requesón 7000</Link>
      </button>
      <br></br>
      <h2>Bbidas</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Quatro 18000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Coca-cola 2500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Colombiana 1500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Postobón 2000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Pepsi 1400</Link>
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
export default ManúSonTentaciones;
