import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import sliderData from './sliderData.json';
import styles from './Slider.module.css';

const Slider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  return (
    <div className={styles.sliderwrap}>
      <div className={styles.sliderContainer}>
        <button onClick={prevSlide} className={`${styles.navButton} ${styles.prevBtn}`}>
          ❮
        </button>

        <div className={styles.slideWrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className={styles.slideContent}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={sliderData[index].image}
                alt={sliderData[index].title}
                className={styles.slideImage}
              />
              <h2 className={styles.title}>{sliderData[index].title}</h2>
            </motion.div>
          </AnimatePresence>
        </div>

        <button onClick={nextSlide} className={`${styles.navButton} ${styles.nextBtn}`}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Slider;
