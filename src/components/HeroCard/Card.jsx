// components/Cards/Card.jsx
import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom'; // Optional: Use if you have routing

const Card = ({ image, title, alt, to }) => {
  return (
    <div className={styles.cardWrapper}>
      <Link to={to} className={styles.card} style={{ textDecoration: "none", color: "inherit" }}>
        <div className={styles.imageBox}>
          <img src={image} alt={alt} />
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.content}>{title}</h3>
          <span className={styles.learnMore}>
            Learn more &gt;
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Card;