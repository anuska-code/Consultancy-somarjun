import React from 'react';
import styles from './Objectives.module.css';
import { motion } from 'framer-motion';
import objectivesData from './objectivesData.json';

// Icons
import { FaBullseye, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';

// Map icon names to actual components
const iconMap = {
  FaBullseye: <FaBullseye />,
  FaRocket: <FaRocket />,
  FaUsers: <FaUsers />,
  FaLightbulb: <FaLightbulb />
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Objectives = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.container}>
        <motion.h2
  className={styles.pageTitle}
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  custom={0}
>
  Our Objectives
</motion.h2>



        <div className={styles.gridWrapper}>
          {objectivesData.map((block, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index + 1}
            >
              <div className={styles.iconTitle}>
                <span className={styles.icon}>
                  {iconMap[block.icon]}
                </span>
                <h3 className={styles.cardTitle}>{block.title}</h3>
              </div>
              {block.image && (
                <img src={block.image} alt={block.title} className={styles.cardImage} />
              )}
              {block.text && <p className={styles.cardText}>{block.text}</p>}
              {block.list && (
                <ul className={styles.cardList}>
                  {block.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Objectives;
