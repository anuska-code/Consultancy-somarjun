import React from 'react';
import styles from './Albums.module.css';

const Albums = () => {
  return (
     <div className={styles.Wrapper}>
    <div className={styles.container}>
        <div className={styles.infoSection}>
      <h3 className={styles.heading}>Albums Content</h3>
      <div className={styles.grid}>
        
        <div className={styles.card}>
          <img src="/images/Card1.png" alt="Admissions" className={styles.image} />
          <p className={styles.caption}>Austraila</p>
        </div>

        <div className={styles.card}>
          <img src="/images/Card2.png" alt="Japan" className={styles.image} />
          <p className={styles.caption}>Japan</p>
        </div>

        <div className={styles.card}>
          <img src="/images/Card3.png" alt="USA" className={styles.image} />
          <p className={styles.caption}>USA</p>
        </div>

        <div className={styles.card}>
          <img src="/images/Card4.png" alt="USA" className={styles.image} />
          <p className={styles.caption}>Denmark</p>
        </div>

        <div className={styles.card}>
          <img src="/images/Card5.png" alt="USA" className={styles.image} />
          <p className={styles.caption}>UK</p>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Albums;
