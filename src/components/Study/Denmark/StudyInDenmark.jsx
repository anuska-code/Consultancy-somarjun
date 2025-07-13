import React from 'react';
import {
  FaCity,
  FaUsers,
  FaGlobe,
  FaGraduationCap,
  FaMoneyBillWave,
  FaPhone,
  FaCoins,
  FaUniversity
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from './StudyInDenmark.module.css';

const StudyInDenmark = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.container}>
        <motion.section
          className={styles.heroSection}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.Wrapper}>
            <div className={styles.textContainer}>
              <motion.h1 className={styles.heroTitle} variants={itemVariants}>
                Study in Denmark from Nepal
              </motion.h1>
              <motion.p className={styles.heroParagraph} variants={itemVariants}>
                Denmark is a hub for innovative education with globally recognized universities, a high standard of living, and a welcoming society. Students from Nepal choose Denmark for its supportive environment, diverse academic programs, and emphasis on practical learning. Whether you're aiming for engineering, business, or arts, Denmark offers a pathway to success. The country’s focus on sustainability, research, and digitalization ensures that students gain skills relevant to the global job market. With a safe and inclusive environment, Denmark helps international students feel at home from day one.
              </motion.p>
              <motion.button className={styles.ctaButton} variants={itemVariants}>
                Learn More
              </motion.button>
            </div>

            <motion.div className={styles.imageContainer} variants={itemVariants}>
              <img src="/images/denmark.png" alt="Denmark from Nepal" />
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className={styles.infoSection}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.infowrapper}>
            <div className={styles.infoText}>
              <motion.h1 className={styles.infoTitle} variants={itemVariants}>
                Abroad Study in Denmark
              </motion.h1>
              <motion.p className={styles.infoParagraph} variants={itemVariants}>
                Studying in Denmark means immersing yourself in a rich European culture while enjoying world-class facilities and career prospects. Nepalese students benefit from scholarships, affordable living, and opportunities for part-time work. Danish universities promote critical thinking, group work, and research-based learning, preparing students for global success. The flexible and student-centered teaching approach encourages innovation and independence. Additionally, many programs are offered in English, making it easier for Nepalese students to adapt academically. Denmark’s strong ties with industries also open doors to internships and post-study job opportunities across Europe.
              </motion.p>
            </div>

            <motion.section
              className={styles.factsSection}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className={styles.factsGrid}>
                <motion.div className={styles.factCard} variants={itemVariants}>
                  <span className={styles.factIcon}><FaCity /></span>
                  <h3>Capital</h3>
                  <p>Copenhagen</p>
                </motion.div>
                <motion.div className={styles.factCard} variants={itemVariants}>
                  <span className={styles.factIcon}><FaUsers /></span>
                  <h3>Population</h3>
                  <p>5.8 million</p>
                </motion.div>
                <motion.div className={styles.factCard} variants={itemVariants}>
                  <span className={styles.factIcon}><FaGlobe /></span>
                  <h3>Language</h3>
                  <p>Danish</p>
                </motion.div>
                <motion.div className={styles.factCard} variants={itemVariants}>
                  <span className={styles.factIcon}><FaGraduationCap /></span>
                  <h3>International Students</h3>
                  <p>40,000</p>
                </motion.div>
                <motion.div className={styles.factCard} variants={itemVariants}>
                  <span className={styles.factIcon}><FaMoneyBillWave /></span>
                  <h3>GDP</h3>
                  <p>$400 billion</p>
                </motion.div>
                <motion.div className={styles.factCard} variants={itemVariants}>
                  <span className={styles.factIcon}><FaPhone /></span>
                  <h3>Dialing Code</h3>
                  <p>+45</p>
                </motion.div>
                <motion.div className={styles.factCard} variants={itemVariants}>
                  <span className={styles.factIcon}><FaCoins /></span>
                  <h3>Currency</h3>
                  <p>Danish krone</p>
                </motion.div>
                <motion.div className={styles.factCard} variants={itemVariants}>
                  <span className={styles.factIcon}><FaUniversity /></span>
                  <h3>Universities</h3>
                  <p>34</p>
                </motion.div>
              </div>
            </motion.section>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default StudyInDenmark;
