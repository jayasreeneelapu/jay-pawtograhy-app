import React, { useState } from "react";
import styles from "./Carousel.module.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { getImageUrl } from "../../utils";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  return (
    <div className={styles.carousel}>
      <BsArrowLeftCircleFill
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={prevSlide}
      />
      {data.map((item, idx) => {
        return (
          <img
            src={getImageUrl(item.src)}
            alt={item.alt}
            key={idx}
            className={
              slide === idx
                ? styles.slide
                : `${styles.slide} ${styles.slideHidden}`
            }
          />
        );
      })}
      <BsArrowRightCircleFill
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={nextSlide}
      />
      <span className={styles.indicators}>
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={
                slide === idx
                  ? styles.indicator
                  : `${styles.indicator} ${styles.indicatorInactive}`
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
};
