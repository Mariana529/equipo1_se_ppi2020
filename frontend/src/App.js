import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import Homecliente from "../src/Pages/Homecliente";
import Logincliente from "../src/Pages/Logincliente";
import HomeRestaurante from "../src/Pages/HomeRestaurante";
import LoginRestaurante from "../src/Pages/LoginRestaurante";
import RegistrarCliente from "../src/Pages/RegistrarCliente";
import RegistrarRestaurante from "../src/Pages/RegistrarRestaurante";
import Restaurantes from "../src/Pages/Restaurantes";
import MenúSublime from "../src/Pages/MenúSublime";
import MenúSaborChocoano from "../src/Pages/MenúSaborChocoano";
import MenúPuntoFamiliar from "../src/Pages/MenúPuntoFamiliar";
import MenúPicnicMirador from "../src/Pages/MenúPicnicMirador";
import MenúMontañita from "../src/Pages/MenúMontañita";
import MenúMiFogónLeñero from "../src/Pages/MenúMiFogónLeñero";
import MenúMalteadasEve from "../src/Pages/MenúMalteadasEve";
import MenúLosPinos from "../src/Pages/MenúLosPinos";
import MenúLa70 from "../src/Pages/MenúLa70";
import MenúEnSanta from "../src/Pages/MenúEnSanta";
import MenúConejosyConejos from "../src/Pages/MenúConejosyConejos";
import MenúCerroVerde from "../src/Pages/MenúCerroVerde";
import MenúCanela from "../src/Pages/MenúCanela";
import MenúBarbacoa from "../src/Pages/MenúBarbacoa";
import MenúCañaBrava from "../src/Pages/MenúCañaBrava";
import MenúEstaderoLaRosita from "../src/Pages/MenúEstaderoLaRosita";
import MenúSieteCueros from "../src/Pages/MenúSieteCueros";
import MenúSonTentaciones from "../src/Pages/MenúSonTentaciones";
import MenúPaisazon from "../src/Pages/MenúPaisazon";
import MenúElPortonSElena from "../src/Pages/MenúElPortonSElena";
import MenúLosHelechos from "../src/Pages/MenúLosHelechos";
import MenúCersarcocina from "../src/Pages/MenúCesarcocina";
import MenúLaAldea from "../src/Pages/MenúLaAldea";
import MenúDeleitaTuPaladar from "../src/Pages/MenúDeleitaTuPaladar";
import MenúOrigenSElena from "../src/Pages/MenúOrigenSElena";
import MenúDondeEdward from "../src/Pages/MenúDondeEdward";
import MenúHowFanExpress from "../src/Pages/MenúHowFanExpress";
import RegistrarEditarVerPedidos from "../src/Pages/RegistrarEditarVerPedidos";
import MenúAsadorElPlacer from "../src/Pages/MenúAsadorElPlacer";
import Compras from "../src/Pages/Compras";
import EditarMiMenú from "../src/Pages/EditarMiMenú";
import VerMisPedidos from "../src/Pages/VerMisPedidos";
import RegistrarMiMenú from "../src/Pages/RegistrarMiMenú";

import Fin from "../src/Pages/Fin";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Homecliente" component={Homecliente} />
          <Route exact path="/Logincliente" component={Logincliente} />
          <Route exact path="/HomeRestaurante" component={HomeRestaurante} />
          <Route exact path="/LoginRestaurante" component={LoginRestaurante} />
          <Route exact path="/RegistrarCliente" component={RegistrarCliente} />
          <Route exact path="/MenúMalteadasEve" component={MenúMalteadasEve} />
          <Route exact path="/MenúLosPinos" component={MenúLosPinos} />
          <Route exact path="/MenúLa70" component={MenúLa70} />
          <Route exact path="/MenúEnSanta" component={MenúEnSanta} />
          <Route
            exact
            path="/MenúEstaderoLaRosita"
            component={MenúEstaderoLaRosita}
          />
          <Route exact path="/Fin" component={Fin} />
          <Route
            exact
            path="/MenúConejosyConejos"
            component={MenúConejosyConejos}
          />
          <Route exact path="/MenúCerroVerde" component={MenúCerroVerde} />
          <Route exact path="/MenúCanela" component={MenúCanela} />
          <Route exact path="/MenúBarbacoa" component={MenúBarbacoa} />
          <Route exact path="/MenúCañaBrava" component={MenúCañaBrava} />
          <Route
            exact
            path="/RegistrarRestaurante"
            component={RegistrarRestaurante}
          />
          <Route exact path="/Restaurantes" component={Restaurantes} />
          <Route exact path="/MenúSublime" component={MenúSublime} />
          <Route
            exact
            path="/MenúSaborChocoano"
            component={MenúSaborChocoano}
          />
          <Route
            exact
            path="/MenúPuntoFamiliar"
            component={MenúPuntoFamiliar}
          />
          <Route
            exact
            path="/MenúPicnicMirador"
            component={MenúPicnicMirador}
          />
          <Route exact path="/MenúMontañita" component={MenúMontañita} />
          <Route
            exact
            path="/MenúMiFogónLeñero"
            component={MenúMiFogónLeñero}
          />
          <Route exact path="/MenúSieteCueros" component={MenúSieteCueros} />
          <Route
            exact
            path="/MenúSonTentaciones"
            component={MenúSonTentaciones}
          />
          <Route exact path="/MenúPaisazon" component={MenúPaisazon} />
          <Route
            exact
            path="/MenúElPortonSElena"
            component={MenúElPortonSElena}
          />
          <Route exact path="/MenúLosHelechos" component={MenúLosHelechos} />
          <Route exact path="/MenúCersarcocina" component={MenúCersarcocina} />
          <Route exact path="/MenúLaAldea" component={MenúLaAldea} />
          <Route
            exact
            path="/MenúDeleitaTuPladar"
            component={MenúDeleitaTuPaladar}
          />
          <Route exact path="/MenúOrigenSElena" component={MenúOrigenSElena} />
          <Route exact path="/MenúDondeEdward" component={MenúDondeEdward} />
          <Route
            exact
            path="/MenúHowFanExpress"
            component={MenúHowFanExpress}
          />
          <Route
            exact
            path="/RegistrarEditarVerPedidos"
            component={RegistrarEditarVerPedidos}
          />
          <Route
            exact
            path="/MenúAsadorElPlacer"
            component={MenúAsadorElPlacer}
          />
          <Route exact path="/Compras" component={Compras} />
          <Route exact path="/EditarMiMenú" component={EditarMiMenú} />
          <Route exact path="/VerMisPedidos" component={VerMisPedidos} />
          <Route exact path="/RegistrarMiMenú" component={RegistrarMiMenú} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
