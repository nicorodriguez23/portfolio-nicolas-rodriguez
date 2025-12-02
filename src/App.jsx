import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Proyectos from "./pages/Proyectos";
import CV from "./pages/CV";
import SobreMi from "./pages/SobreMi";
import Contacto from "./pages/Contacto";

import CodeRain from "./components/CodeRain"; 

import "./App.css";

function App() {
  return (
    <div className="app-root">
      <CodeRain />

      <div className="app-shell">
        <Navbar />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
