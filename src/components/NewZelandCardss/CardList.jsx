import React from 'react';
import Cards from './Cards.jsx';
import styles from './Card.module.css';
import data from '../NewZelandCardss/data.json';
import { motion } from 'framer-motion';

const CardList = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className={styles.cardWrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {data.map((card, index) => (
          <Cards key={index} {...card} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CardList;
