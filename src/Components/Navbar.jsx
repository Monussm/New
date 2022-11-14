import React from "react";
import { NavLink } from "react-router-dom";
const Navbar =()=>
{
    return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand"><img src="../Image/logo.png.webp"/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 m-auto">
        <li className="nav-item mx-2">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item mx-2">
          <NavLink to="/about" className="nav-link">About</NavLink>
          </li>
        <li className="nav-item mx-2">
          <NavLink to="/service" className="nav-link">Services</NavLink>
        </li>
        <li className="nav-item mx-2">
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn free" type="submit">Free Quote</button>
      </form>
    </div>
  </div>
</nav>
    </>
}
export default Navbar;