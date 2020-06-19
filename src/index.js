//Depois de instalar router, flux e bootstrap . installar os pacotes necessários para configurar uma API de teste: yarn add cross-env@5.2.0 npm-run-all@4.1.5 json-server@0.15.0 -D
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import { render } from "react-dom";

import App from "./components/App";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
