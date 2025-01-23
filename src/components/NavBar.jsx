import '../styles/navbar.css'
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1>Scholar Ease</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/schemes">Schemes</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
