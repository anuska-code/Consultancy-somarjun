import React from 'react';
import styles from './Studynewzealand.module.css';
import CardList from '../../NewZelandCardss/CardList';
import { motion } from 'framer-motion';

const Studynewzealand = () => {
  return (
    <div className={styles.studyContainer}>
      <div className={styles.studyContent}>
        {/* Why Study in New Zealand Section */}
        <motion.div
          className={styles.studyReasons}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.reasonsText}>
            <motion.h2
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Why Study in New Zealand from Nepal?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              There are lots of reasons that you should consider going New Zealand for your further abroad study. New Zealand has an international reputation as a provider of quality education. It offers a safe learning environment which provides excellent study opportunities & support system for international students.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Many people will call natives of the country "Kiwis" after the bird that only resides there and nowhere else in the entire world. New Zealand's people are some of the most amazing, loving, and welcoming people that you will ever meet. If you are a stranger, a native New Zealander is going to treat you like you are a friend.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              The economy of New Zealand is actually incredibly stable; the cost of living is low, and the government is more stable than the government that you see in other countries. Nothing can get better than the weather of New Zealand. Weather of New Zealand is almost same as weather of Nepal.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* The Educational System Section */}
      <motion.div
        className={styles.educationwrap}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className={styles.educationSystem}>
          <motion.h2
            className={styles.sectionTitls}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The Educational System
          </motion.h2>
          <div className={styles.educationContent}>
            {/* Left Text */}
            <motion.div
              className={styles.systemText}
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p>
                This is the number one reason to go New Zealand to study. New Zealand is amazing
                for their education system. At first, tuition fee is some of the lowest in the world. The
                degrees are recognized around the world as being up-to-date and practical. You
                will get high quality hand on education that you deserve. The New Zealand even
                goes so far as to checking each and every course, program and certificate for
                quality so that they can be recognized around the world as high-quality education.
                The support services for international students are among the best in the world.
                They have a lot of expertise and experience in helping international students so
                that they can succeed in their programs.
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className={styles.systemImage}
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="/images/admissions.png" alt="Student in Library" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Cards Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <CardList />
      </motion.div>
    </div>
  );
};

export default Studynewzealand;
