import { RouterProvider } from "react-router-dom";
import { Router } from "./router/Router";

/* Aqui utilizamos router provider para administrar y controlar las rutas de las paginas
agregando un sppiner para mejor UX */

const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
