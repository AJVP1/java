// importar librerias
import { HashRouter, Route, Routes } from "react-router-dom";

// importar componentes

// importar paginas
import { Introduccion } from "./pages/Introduccion.tsx";
import { Instalacion } from "./pages/Instalacion.tsx";
import { Sintaxis } from "./pages/Sintaxis.tsx";
import { POO } from "./pages/Poo.tsx";
import { Colecciones } from "./pages/Colecciones.tsx";
import { Excepciones } from "./pages/Excepciones.tsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Introduccion />} />
        <Route path="/instalacion" element={<Instalacion />} />
        <Route path="/sintaxis" element={<Sintaxis />} />
        <Route path="/poo" element={<POO />} />
        <Route path="/colecciones" element={<Colecciones />} />
        <Route path="/excepciones" element={<Excepciones />} />

        <Route path="*" element={<p>Página no encontrada</p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
