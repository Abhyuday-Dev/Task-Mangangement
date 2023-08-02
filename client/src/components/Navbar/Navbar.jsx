import React, { useState } from "react";
import { GiHamburgerMenu, GiCrossedBones } from "react-icons/gi";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const navToggle = () => {
    setIsActive(!isActive);
  };

  const handleClick = () => {
    setIsActive(false);
  };

  return (
    <nav className="nav">
      <Link to="/" className="nav__brand">
        Task Manager
      </Link>
      <ul className={`nav__menu ${isActive ? "nav_active" : ""}`}>
        <Link to="/">
          <li className="nav__item">
            <a href="#" className="nav__link" onClick={handleClick}>
              Home
            </a>
          </li>
        </Link>
        <Link to="/Tasks">
          <li className="nav__item">
            <a href="#" className="nav__link" onClick={handleClick}>
              All Tasks
            </a>
          </li>
        </Link>
        <Link to="/addTask">
          <li className="nav__item">
            <a href="#" className="nav__link" onClick={handleClick}>
              Add Task
            </a>
          </li>
        </Link>
      </ul>
      <div className="nav_toggler" onClick={navToggle}>
        {!isActive ? <GiHamburgerMenu /> : <GiCrossedBones />}
      </div>
    </nav>
  );
};

export default Navbar;
