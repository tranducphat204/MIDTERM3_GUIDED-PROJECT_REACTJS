import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../ThemContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  
  return (
    <nav className={`navbar ${darkMode ? "bg-dark" : "bg-success"}`}>
      <h1>
        <i className="fab fa-github">Github Finder</i>
      </h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <label htmlFor="checkbox">Dark Mode: </label>
        <input
          id="checkbox"
          type="checkbox"
          value={darkMode}
          onClick={() => setDarkMode(!darkMode)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
