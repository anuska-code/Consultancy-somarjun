// components/Cards/CardList.jsx
import React from 'react';
import Card from './Card';
import data from './data.json';
import styles from './Card.module.css';

const CardList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Wherever you want to go, we'll get you there.</h2>
        <p>
          Explore the best study destinations in the world! Learn all about the
          countries' top universities, scholarships, cost of living, post-study
          work rights and more
        </p>
      </div>
      <div className={styles.cardListWrapper}>
        {data.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            alt={item.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;