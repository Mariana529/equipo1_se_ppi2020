import React from "react";
import { Link } from "react-router-dom";

function MenuDondeEdward() {
  return (
    <div>
      <h1>Menú</h1>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Pechugas de pollo...8.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Almendrado...7.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Salmon en salsa de silantro...9.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Pulpo a la mexicana...10.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Lomo en salsa de champiñones...12.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Arrozmarinero electrico...12.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Pechuga de pavo asado...15.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Hamburguesa...5.000 y 7.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Chuzos...10.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Perra...7.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Perro...4.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Carne desmechada...6.000</Link>
      </button>
      <br></br>
      <h2>jugos</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Jugo de mora...2.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Jugo de granadilla...2.000</Link>
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
        <Link to="/Compras">Jugo de borojo...2.500</Link>
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
export default MenuDondeEdward;
