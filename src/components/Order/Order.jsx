import React from "react";
import styles from "./Order.module.css";
import { CustomEmail } from "../CustomEmail/CustomEmail";

export const Order = () => {
  return (
    <section id="order" className={styles.orderContainer}>
      <div className={styles.orderBtn}>
        <CustomEmail />
      </div>
      <div className={styles.instructions}>
        <h3>Instructions</h3>
        <ul>
          <li>
            Please upload <b>High Quality Images</b> only.
          </li>
          <li>
            Upon clicking the <b>Order Here</b> button, an email draft appears.
          </li>
          <li>Please fill in all the requested details in the email.</li>
        </ul>
        <p>
          We will reply with the price details and an estimated delivery date.
        </p>
      </div>
    </section>
  );
};
