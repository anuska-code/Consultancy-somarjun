import React from 'react';
import { motion } from 'framer-motion';
import styles from './StudyUK.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const StudyUK = () => {
  return (
    <motion.div
      className={styles.studyUKWrapper}
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      <div className={styles.studyUKSection}>
        <motion.div
          className={styles.herotext}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className={styles.heading}>Why Study in UK from Nepal?</h2>
        </motion.div>
        
        <motion.div
          className={styles.studyUKContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className={styles.textSection}>
            <p className={styles.paragraph}>
              The United Kingdom is renowned for its quality of education. Many universities established in the 12th century have become leaders in the education world. Study in UK, providing quality education and pioneered the education culture.
            </p>
            <p className={styles.paragraph}>
              If you intend to study in the UK, you are up for a unique experience. Whether it is the hustle and bustle of London you are looking for or the charming countryside of West England, you will fall in love with the UK and its people.
            </p>
            <p className={styles.paragraph}>
              With the long history of education culture, there is no wonder that it has one of the biggest international student populations in the world.
            </p>
            <p className={styles.paragraph}>
              Whatever your interests, there’s a huge range of clubs and societies, as well as a diverse social life on offer.
            </p>
            <ul className={styles.list}>
              <li>Plenty of course choices: Choose from over 50,000 courses, in more than 25 subject areas.</li>
              <li>UK courses are generally shorter than other countries, helping to reduce overall tuition fees and accommodation costs.</li>
              <li>It can be possible to work while you study too.</li>
            </ul>
          </div>

          <motion.div
            className={styles.imageSection}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <img
              src="/images/uk.png"
              alt="UK University"
              className={styles.ukImage}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.footertext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <p className={styles.note}>
            Stick around till the end to find out everything you need to know as a Nepali student planning for higher education in the UK.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StudyUK;
