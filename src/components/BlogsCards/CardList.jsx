import React from 'react';
import { motion } from 'framer-motion';
import Cards from './Cards';
import styles from './Cards.module.css';
import data from './data.json';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const CardList = () => {
  return (
    <motion.div
      className={styles.wrapper}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className={styles.cardListGrid}>
        {data.map((guide) => (
          <Cards
            key={guide.id}
            id={guide.id}
            title={guide.title}
            date={guide.date}
            text={guide.text}
            imageUrl={guide.imageUrl}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default CardList;
