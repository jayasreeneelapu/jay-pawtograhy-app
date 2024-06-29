import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <p>Jayasree Neelapu © {currentYear}</p>
    </div>
  );
};
