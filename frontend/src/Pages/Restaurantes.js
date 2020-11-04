import React from "react";
import { Link } from "react-router-dom";

function Restaurantes() {
  return (
    <div>
      <h1> Fast Food </h1>
      <h2> Restaurantes </h2>
      <button className="btn-warning">
        {" "}
        <Link to="/MenúMontañita">La Montañita </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/MenúPuntoFamiliar"> Punto Familiar </Link>{" "}
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/MenúMiFogónLeñero">Mi Fogón Leñero </Link>{" "}
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/MenúSaborChocoano">Sabor Chocoano </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/MenúElPortonSElena">El Portón a Santa Elena </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/MenúConejosyConejos">Conejos y Conejos </Link>{" "}
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/MenúPicnicMirador">Pincnic El Mirador </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/MenúBarbacoa">Barbacoa De Cheo </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/MenúSublime">Subliem Resto De Café </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/MenúLosHelechos"> Los Helechos </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/MenúLosPinos"> Los Pinos </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/MenúCerroVerde">Cerro Verde</Link>{" "}
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/MenúMalteadasEve">Malteadas Eve </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/MenúCañaBrava">Caña Brava </Link>{" "}
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/MenúCersarcocina">Cesar Cocina </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/MenúLa70">La 70 </Link>{" "}
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/MenúCanela">Canela </Link>{" "}
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/MenúEnSanta">En Santa </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/MenúPaisazon"> Paisazon </Link>{" "}
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/MenúLaAldea">La aldea </Link>{" "}
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/MenúHowFanExpress">How fan Expres </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/MenúSieteCueros">Siete Cueros </Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/MenúDondeEdward">Donde Edwward</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/MenúEstaderoLaRosita">Estadero La Rosita</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        {" "}
        <Link to="/MenúSonTentaciones">Son Tentaciones</Link>
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/MenúDeleitaTuPaladar">Deleita Tu Paladar</Link>{" "}
      </button>
      <br></br>
      <button className="btn-warning">
        <Link to="/MenúAsadorElPlacer">Asador El Placer</Link>
      </button>
      <br></br>
      <br></br>
      <button className="btn-warning" class="Atras">
        <Link to="/Homecliente"> Atras </Link>
      </button>
    </div>
  );
}

export default Restaurantes;
