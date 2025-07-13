import React from 'react';
import Cards from './Cards';
import styles from './Cards.module.css';
import data from './data.json';

const CardList = () => {
  return (
    <div className={styles.wrapper}>
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
    </div>
  );
};

export default CardList;