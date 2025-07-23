import React from 'react';
import { motion } from 'framer-motion';
import styles from './Albums.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

const Albums = () => {
  const cards = [
    { src: '/images/Card1.png', caption: 'Australia', alt: 'Australia' },
    { src: '/images/Card2.png', caption: 'Japan', alt: 'Japan' },
    { src: '/images/Card3.png', caption: 'USA', alt: 'USA' },
    { src: '/images/Card4.png', caption: 'Denmark', alt: 'Denmark' },
    { src: '/images/Card5.png', caption: 'UK', alt: 'UK' }
  ];

  return (
    <div className={styles.Wrapper}>
      <div className={styles.container}>
        <div className={styles.infoSection}>
          <motion.h3
            className={styles.heading}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Albums Content
          </motion.h3>

          <div className={styles.grid}>
            {cards.map((card, i) => (
              <motion.div
                key={i}
                className={styles.card}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
              >
                <img src={card.src} alt={card.alt} className={styles.image} />
                <p className={styles.caption}>{card.caption}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Albums;
