import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.scss';
import logo from './frogoCombo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink to="/" className="navbar-logo">
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>
      <div className="navbar-right">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <NavLink to="/about" className="navbar-link">
              About
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/products" className="navbar-link">
              Products
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/partners" className="navbar-link">
              Partners
            </NavLink>
          </li>
        </ul>
        <div className="navbar-user">
          <NavLink to="/login" className="navbar-link">
            Log in
          </NavLink>
          <NavLink to="/signup" className="navbar-link navbar-button">
            Sign up
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
