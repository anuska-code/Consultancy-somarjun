// components/Cards/Card.jsx
import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom'; // Optional: Use if you have routing

const Card = ({ image, title, alt }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.imageBox}>
          <img src={image} alt={alt} />
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.content}>{title}</h3>
          <a href="#" className={styles.learnMore}>
            Learn more &gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;