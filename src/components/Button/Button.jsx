import React from "react";
import styles from "./Button.module.css";

export const Button = ({ link, text }) => {
  return (
    <a className={styles.contactBtn} href={link}>
      {text}
    </a>
  );
};
