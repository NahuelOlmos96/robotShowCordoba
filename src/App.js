import "./estilos/informacion.css";
import "./estilos/carrucel.css";
import "./App.css";
import { Logo } from "./componentes/logo";
import { Informacion } from "./componentes/informacion";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import { Carrucel } from "./componentes/carrucel";
import whatapp from "./imganes/whatapp.png";
import tiktok from "./imganes/tiktok.png";
import instagram from "./imganes/instagram.png";
function App() {
  return (
    <div className="App container-fluid">
      <BrowserRouter>
        <nav className="nav ">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/informacion">
            About
          </Link>
        </nav>
        <div className="contendorinformacion">
          <Routes>
            <Route path="/" element={<Logo />} />
            <Route path="/informacion" element={<Informacion />} />
          </Routes>
          <div className="contendorCarrucel">
            <Carrucel />
          </div>
        </div>
      </BrowserRouter>

      <div className="contactos">
        <div>
          <p>contactos</p>
        </div>
        <div className="containerfotos">
          <img src={whatapp} class="w-100" alt="..." />
          <img src={instagram} class="w-100" alt="..." />
          <img src={tiktok} class="w-100" alt="..." />
        </div>
      </div>
    </div>
  );
}

export default App;
