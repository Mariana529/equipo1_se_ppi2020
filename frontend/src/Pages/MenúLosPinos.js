import React from "react";
import { Link } from "react-router-dom";

function LosPinos() {
  return (
    <div>
      <h1>Menú</h1>
      <br></br>
      <h2>Desayunos</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Arepa con quesito...5.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Arepa, huevo y pandebono...10.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Calentado, huevo, arepa y quesito...12.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Calentado, huevo, arepa y carne...15.000</Link>
      </button>
      <br></br>
      <h2>Almuerzos</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Sudado de carne y pollo...15.800</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Mondongo...13.500</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Sudado de pollo...10.700</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Frijoles...10.700</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Sopa de verduras...6.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Sudado de carne...12.000</Link>
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
export default LosPinos;
