import React from "react";

export default function Navbar({ ToggleCarro }) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <p className="navbar-brand">Carro de Compras Front End React</p>
        <button className="btn btn-outline-success" onClick={ ToggleCarro }>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </nav>
  );
}
