import React from 'react';
import Card from './Card';
import styles from './Card.module.css';
import data from './data.json';

const CardList = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      <h1 className={styles.heading}>Reasons to Study in Ireland</h1>
      <div className={styles.grid}>
        {data.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default CardList;
