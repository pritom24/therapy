import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"


function Navbar() {
  return <>
  <div className='container-fluid nav_bg'>
    <div className='row'>
      <div className='col-10 mx-auto'>

     
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">PRIMEX INFO</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> 
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
       <li className="nav-item">
          <NavLink className="nav-link" to="contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    </div>
  </div>
  </>
}

export default Navbar