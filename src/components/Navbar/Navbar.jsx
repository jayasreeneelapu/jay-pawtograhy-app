import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/jay-pawtograhy-app/">
        Jay Pawtography
      </a>
      {/* <Link to="/" className={styles.title}>
        Jay Pawtography
      </Link> */}
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About Jay</a>
          </li>
          <li>
            <a href="#work">Her work</a>
          </li>
          <li>
            <a href="#order">Order here</a>
          </li>
          <li>
            <a href="#contact">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
