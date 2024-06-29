import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2 className={styles.title}>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/instaIcon.png")}
            alt="instaIcon"
            className={styles.icon}
          />
          <a href="https://www.instagram.com/toons_of_jay/">Toons_of_Jay</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/emailIcon.png")}
            alt="emailIcon"
            className={styles.icon}
          />
          <a href="mailto:toonsofjay@gmail.com">toonsofjay@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/websiteIcon.png")}
            alt="websiteIcon"
            className={styles.icon}
          />
          <a href="https://jayasreeneelapu.wordpress.com/">Jay's Portfolio</a>
        </li>
      </ul>
    </section>
  );
};
