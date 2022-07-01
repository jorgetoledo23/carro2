import React from "react";

export default function Navbar({ ToggleCarro }) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <p className="navbar-brand">Carro de Compras Front End React</p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div className="d-flex" role="search"></div>
        </div>
        <button className="btn btn-outline-success" onClick={ToggleCarro}>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </nav>
  );
}
