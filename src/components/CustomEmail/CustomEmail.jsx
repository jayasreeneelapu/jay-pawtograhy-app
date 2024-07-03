import React from "react";
import styles from "./CustomEmail.module.css";

export const CustomEmail = () => {
  const recipient = "toonsofjay@gmail.com";
  const subject = "Pawtography Order";
  const body = `Hi,

    ***Please fill the below details, so we can get back to you for further discussion.***

    -------------------- EDIT HERE -------------------------

    1. Your Name :

    2. Drawing Type (Portrait/Group) :

    3. Your Pet's Name :

    4. Attached Reference Photo (Yes/No) :

    5. Expected Finish Date :

    6. Anything else you want to add :



    ---------------------------------------------------------------

    ***We will reply back within 24 hours to discuss further***
    ***Thank you for choosing us***
    Jay Pawtography: https://jayasreeneelapu.github.io/jay-pawtograhy-app/
    `;

  const emailLink = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <a href={emailLink} className={styles.contactBtn}>
      Order Here
    </a>
  );
};
