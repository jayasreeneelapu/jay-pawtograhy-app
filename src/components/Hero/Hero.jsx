import React from "react";
import styles from "./Hero.module.css";
import { Button } from "../Button/Button";
import { IdentityPic } from "../IdentityPic/IdentityPic";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <IdentityPic imgSrc="hero/pandu.png" title="Pandu" />
      <div className={styles.content}>
        <h1 className={styles.title}>I'm Pandu, Jay's assistant.</h1>
        <p className={styles.description}>
          I'll guide you through the Pawtography tour. Take a look at her work,
          and if you're impressed, feel free to email us to place an order or
          ask any questions.
        </p>
        <p className={styles.description}>
          I also make sure, 50% of the money is used for our paw-friends in
          need.
        </p>
        <Button link="mailto:toonsofjay@gmail.com" text="Mail us!" />
      </div>

      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
