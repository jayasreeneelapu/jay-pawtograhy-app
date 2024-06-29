import React from "react";
import styles from "./Work.module.css";
import { Carousel } from "../Carousel/Carousel";
import { slides } from "../../data/carouseldata.json";
import { portraitSlides } from "../../data/portraitCarouselData.json";
import { groupSlides } from "../../data/groupCarouselData.json";

export const Work = () => {
  return (
    <div className={styles.work} id="work">
      <h2 className={styles.title}>Her work</h2>
      <section className={styles.carouselsContainer}>
        <div className={styles.carouselSet}>
          <h3>Portraits</h3>
          <Carousel data={portraitSlides} />
        </div>
        <div className={styles.carouselSet}>
          <h3>Groups</h3>
          <Carousel data={groupSlides} />
        </div>
      </section>
    </div>
  );
};
