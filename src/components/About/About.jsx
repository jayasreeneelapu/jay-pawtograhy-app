import React from "react";
import styles from "./About.module.css";
import { IdentityPic } from "../IdentityPic/IdentityPic";

export const About = () => {
  return (
    <div className={styles.about} id="about">
      <h2 className={styles.title}>About Jay</h2>
      <section className={styles.container}>
        <IdentityPic imgSrc="hero/aboutJay.png" title="ArtistIcon" />
        <div className={styles.content}>
          <p className={styles.description}>
            Jayasree Neelapu, is a full-time software engineer and a part-time
            illustrator, so we got this website developed by her.
          </p>
        </div>
      </section>
    </div>
  );
};
