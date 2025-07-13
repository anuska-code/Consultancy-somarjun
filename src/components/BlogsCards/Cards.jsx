import React from 'react';
import { FaBook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from './Cards.module.css';

const Cards = ({ id, title, date, text, imageUrl }) => {
  return (
    <motion.div
      className={styles.cardItem}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.cardContent}>
        <img src={imageUrl} alt={title} className={styles.cardImage} />
        <div className={styles.cardTextWrapper}>
          {/* <FaBook className={styles.cardIcon} /> */}
          <h2 className={styles.cardTitle}>{title}</h2>
          <p className={styles.cardDate}>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
          <p className={styles.cardDescription}>{text}</p>
          <button className={styles.readMoreBtn}>Read More</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;