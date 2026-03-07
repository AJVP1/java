// importar librerias
import { HashRouter } from "react-router-dom";

// importar componentes

// importar paginas
import { Introduccion } from "./pages/Introduccion.tsx";

function App() {
  return (
    <HashRouter>
      <Introduccion />
    </HashRouter>
  );
}

export default App;
