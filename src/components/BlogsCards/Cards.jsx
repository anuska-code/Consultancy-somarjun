import React from 'react';
import { motion } from 'framer-motion';
import styles from './Cards.module.css';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Cards = ({ title, date, text, imageUrl }) => {
  return (
    <motion.div className={styles.cardItem} variants={cardVariants}>
      <div className={styles.cardContent}>
        <img src={imageUrl} alt={title} className={styles.cardImage} />
        <div className={styles.cardTextWrapper}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <p className={styles.cardDate}>
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </p>
          <p className={styles.cardDescription}>{text}</p>
          <button className={styles.readMoreBtn}>Read More</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;
