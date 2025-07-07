import React from 'react';
import styles from './ScoreScale.module.css';
import { motion } from 'framer-motion';

const ScoreScale = () => {
  const scores = [
    { band: 9, level: 'Expert user' },
    { band: 8, level: 'Very good user' },
    { band: 7, level: 'Good user' },
    { band: 6, level: 'Competent user' },
    { band: 5, level: 'Modest user' },
    { band: 4, level: 'Limited user' },
    { band: 3, level: 'Extremely limited user' },
    { band: 2, level: 'Intermittent user' },
    { band: 1, level: 'Non-user' },
    { band: 0, level: 'Did not attempt the test' },
  ];

  return (
    <>
      <motion.div
        className={styles.scoreWrapper}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.scorewrap}>
          {/* Heading */}
          <motion.div
            className={styles.text}
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>IELTS Score Scale:</h3>
          </motion.div>

          {/* Table */}
          <motion.div
            className={styles.tableContainer}
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <table className={styles.scoreTable}>
              <thead>
                <tr>
                  <th>Band Score</th>
                  <th>Level of Proficiency</th>
                </tr>
              </thead>
              <tbody>
                {scores.map((item, index) => (
                  <motion.tr
                    key={item.band}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <td>{item.band}</td>
                    <td>{item.level}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default ScoreScale;
