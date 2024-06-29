import React from "react";
import styles from "./IdentityPic.module.css";
import { getImageUrl } from "../../utils";

export const IdentityPic = ({ imgSrc, title }) => {
  return (
    <img src={getImageUrl(imgSrc)} alt={title} className={styles.img}></img>
  );
};
