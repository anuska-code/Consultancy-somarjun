// File: Objectives.jsx
import React from 'react';
import styles from './Objectives.module.css';
import { motion } from 'framer-motion';
import { FaBullseye, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';

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
    <motion.div
      className={styles.mainWrapper}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      custom={0}
    >
      <div className={styles.container}>
        <div className={styles.sectionWrapper}>
          <motion.div className={styles.textContainer} variants={fadeInUp} custom={1}>
            <motion.h2 className={styles.heading} variants={fadeInUp} custom={1}>
              <FaBullseye style={{ marginRight: '10px' }} />
              Our Objectives
            </motion.h2>

            <motion.p className={styles.paragraph} variants={fadeInUp} custom={2}>
              We believe in empowering every learner with the tools, support, and guidance needed to unlock global academic opportunities. Our mission is grounded in equity, excellence, and holistic development.
            </motion.p>

            <motion.h3 className={styles.subheading} variants={fadeInUp} custom={3}>
              Specific Aims and Goals
            </motion.h3>
            <ul>
              <li>Recognize and uplift each student’s potential and aspirations.</li>
              <li>Create structured pathways to gain admission into top institutions.</li>
              <li>Promote goal-oriented learning through mentorship.</li>
            </ul>

            <motion.h3 className={styles.subheading} variants={fadeInUp} custom={4}>
              Core Objectives
            </motion.h3>
            <ul>
              <li>Encourage ethical decision-making and academic integrity.</li>
              <li>Build international partnerships to broaden learning opportunities.</li>
              <li>Maintain long-term student engagement and support.</li>
            </ul>

            <motion.h3 className={styles.subheading} variants={fadeInUp} custom={5}>
              Short-Term and Long-Term Goals
            </motion.h3>

            <motion.p className={styles.paragraph} variants={fadeInUp} custom={6}>
              <strong>Short-Term Goals:</strong>
            </motion.p>
            <ul>
              <li>Increase international acceptance rates through expert guidance.</li>
              <li>Provide up-to-date scholarship databases and financial support.</li>
              <li>Launch intensive preparatory workshops for entrance exams.</li>
            </ul>

            <motion.p className={styles.paragraph} variants={fadeInUp} custom={7}>
              <strong>Long-Term Goals:</strong>
            </motion.p>
            <ul>
              <li>Develop a global community of educated changemakers.</li>
              <li>Strengthen our digital learning platform to serve diverse learners.</li>
              <li>Establish an alumni mentorship program for future support.</li>
            </ul>

            <motion.h3 className={styles.subheading} variants={fadeInUp} custom={8}>
              <FaRocket style={{ marginRight: '10px' }} />
              Vision for the Future
            </motion.h3>
            <motion.p className={styles.paragraph} variants={fadeInUp} custom={9}>
              Our vision is to foster a generation of globally responsible leaders by bridging academic ambition with international opportunity. We aim to become a go-to academic companion for students across all backgrounds and disciplines.
            </motion.p>

            <motion.h3 className={styles.subheading} variants={fadeInUp} custom={10}>
              <FaUsers style={{ marginRight: '10px' }} />
              Community Engagement
            </motion.h3>
            <ul>
              <li>Host regional and international webinars with alumni & scholars.</li>
              <li>Collaborate with NGOs and educational partners for outreach.</li>
              <li>Run mentorship circles to guide first-generation students.</li>
            </ul>

            <motion.h3 className={styles.subheading} variants={fadeInUp} custom={11}>
              <FaLightbulb style={{ marginRight: '10px' }} />
              Innovation & Expansion
            </motion.h3>
            <ul>
              <li>Leverage AI-powered tools for personalized academic planning.</li>
              <li>Introduce gamified learning paths to improve engagement.</li>
              <li>Expand our platform to include courses on soft skills and global readiness.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Objectives;
