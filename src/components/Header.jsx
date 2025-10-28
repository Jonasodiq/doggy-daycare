import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import styles from "./Header.module.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {setMenuOpen(!menuOpen);};

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brandBox}>
          <h1 className={styles.brand}>
            <NavLink to="/">
              <img src={logo} alt="Logo" className={styles.brandImg} />
              Doggy<br />Daycare
            </NavLink>
          </h1>
        </div>

        {/* Hamburger button */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav className={`${styles.nav} ${menuOpen ? styles.showMenu : ""}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            onClick={() => setMenuOpen(false)}
          >
            Katalog
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
