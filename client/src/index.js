import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/styles.scss";
import { HelmetProvider } from "react-helmet-async";

/* render principal, utilizando helmet provider para mejorar el SEO
de nuestras paginas */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
