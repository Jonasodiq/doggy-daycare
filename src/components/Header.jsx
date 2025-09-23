import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brandBox}>
          <img src={logo} alt="Logo" className={styles.brandImg} />
          <h1 className={styles.brand}>
            <NavLink to="/">
              Doggy<br />Daycare
            </NavLink>
          </h1>
        </div>
        <nav className={styles.nav}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Katalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;