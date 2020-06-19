import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Atividade do curso de React || React-Router || Flux</h1>
      <p>React, Flux, and React Router projeto utilizado para seguir o curso 
        da plataforma Pluralsight ministrado por <a href="https://twitter.com/housecor">Cory House</a>.</p>
      <Link to="/About" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default HomePage;
