import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function MenuSublime() {
  return (
    <div>
      <h1>Menú</h1>
      <br></br>
      <h2>Todo tipo de pan</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Pan leche...1.000, 3.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Pan mantequilla...1.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Pan de bono...1.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Pan de queso...1.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Pan queso...3.000</Link>
      </button>
      <br></br>
      <h2>Bebidas</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Chocolate...2.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Aguapanela...2.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Cafe expreso...2.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Capuchino...2.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Jugos de agua..3.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Jugos en leche...4.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Gaseosa...2.000</Link>
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
export default MenuSublime;
