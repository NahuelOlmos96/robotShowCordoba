import "./estilos/informacion.css";
import "./estilos/carrucel.css";
import "./App.css";
import { Logo } from "./componentes/logo";
import { Informacion } from "./componentes/informacion";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import { Carrucel } from "./componentes/carrucel";
import Contactos from "./componentes/contactos";



function App() {
  return (
    <div className="App container">
      <div >
        <BrowserRouter>
          <nav className="nav row">
            <Link className="nav-link col-1" to="/">
              INICIO
            </Link>
            <Link className="nav-link col-1" to="/informacion">
              SERVICIO
            </Link>  <Link className="nav-link col-1" to="/contactos">
              CONTASCTOS
            </Link>
          </nav>
          <div className="contendorinformacion row">
            <div className="col-6">
              <Routes>
                <Route path="/" element={<Logo />} />
                <Route path="/informacion" element={<Informacion />} />
                <Route path="/contactos" element={<Contactos />} />
              </Routes>
            </div>
            <div className="contendorCarrucel col-6">
              <Carrucel />
            </div>
          </div>
        </BrowserRouter>
        <div className="piePagina">
          tecnologia divercion para tu fiesta. show para todo tipo de evento
        </div>
        
      </div>
    </div>
  );
}

export default App;
