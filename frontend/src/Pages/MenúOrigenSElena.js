import React from "react";
import { Link } from "react-router-dom";

function MenuOrigenSElena() {
  return (
    <div>
      <h1>Menú</h1>
      <br></br>
      <h2>Platos fuertes</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Bandeja de chorizo....14.600</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Porcion de frijoles...9.800</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Chicharron con arepa y patacon...10.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Bandeja de pollo...12.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Bandeja de res...13.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">robalo a la milanesa o al ajilo...22.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">salmon...27.900</Link>
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
    </div>
  );
}
export default MenuOrigenSElena;
