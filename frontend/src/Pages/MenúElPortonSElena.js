import React from "react";
import { Link } from "react-router-dom";

function MenúElPortonSElena() {
  return (
    <div>
      <h1>Menú</h1>
      <br></br>
      <h2>Desayunos</h2>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Sarten de calentado...16.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Desayuno chocolo..11.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Desayuno tela...9.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Bowl de frutas...10.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Porcion de frutas...6.900</Link>
      </button>
      <br></br>
      <h2>Entradas</h2>
      <button className="btn-warning">
        <Link to="/Compras">Arepa de chocolocon quesito...7.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Empanadas x6...5.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Patacones x8...8.800</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Porcion de chorizo...10.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Porcion de morcilla...9.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Choripapas...12.800</Link>
      </button>
      <br></br>
      <h2>Platos fuertes</h2>
      <button className="btn-warning">
        <Link to="/Compras">Cazuela de frijoles...24.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Mondongo...20.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Sancocho...20.000</Link>
      </button>
      <br></br>
      <h2>Bebidas</h2>
      <button className="btn-warning">
        <Link to="/Compras">Jugo de naranja...6.200</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Jugo natural en agua..5.600</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Jugo natural en leche...5.900</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Botella de agua...4.000</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Gatorade...4.400</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Gaseosa..4.400</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/Compras">Chocolate oscuro...3.700</Link>
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
export default MenúElPortonSElena;
