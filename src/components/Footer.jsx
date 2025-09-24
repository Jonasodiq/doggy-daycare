import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        
        <nav className={styles.nav}>
          <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : undefined}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={({ isActive }) => isActive ? styles.active : undefined}>
            Katalog
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : undefined}>
            About
          </NavLink>
        </nav>
        <p className={styles.copy}>
          Jonas N © Copyright {new Date().getFullYear()}.<br/> All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
