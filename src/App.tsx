// importar librerias
import { HashRouter, Route, Routes } from "react-router-dom";

// importar componentes

// importar paginas
import { Introduccion } from "./pages/Introduccion.tsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Introduccion />} />
        <Route path="*" element={<p>Página no encontrada</p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
