// StudentScreening.jsx
import React from 'react';
import styles from './Screening.module.css';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Screening = () => {
  return (
    <motion.div
      className={styles.screeningWrapper}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className={styles.container}>
        <motion.div className={styles.headerSection} variants={fadeInUp}>
          <h1 className={styles.heading}>Student Screening</h1>
          <p className={styles.breadcrumb}>
            Home <span className={styles.active}>/ STUDENT SCREENING</span>
          </p>
        </motion.div>

        <motion.div className={styles.textSection} variants={staggerContainer}>
          <motion.p variants={fadeInUp}>
            The “student assistance team” of Next Consultancy is an experienced agency in background
            checks of Students eligibility for enrollment. Universities, colleges and education providers
            turn to us because of our safe, secure and customized screening procedure which is unique in
            the Nepalese Prospective student market.
          </motion.p>

          <motion.p variants={fadeInUp}>
            The goal of the Student Assistance Team is to offer additional support to kids who are having
            academic or behavioral issues and who are either performing below or above expectations.
            This prevents the students from benefiting from general education.
          </motion.p>

          <motion.p variants={fadeInUp}>
            A student must be referred to the student assistance team for consideration of interventions
            if universal screening, a recommendation from a parent, a staff member, or other information
            accessible to a public agency suggests that they need educational support for learning.
          </motion.p>

          <motion.p variants={fadeInUp}>
            We conduct background checks for academic, financial, study gap, career progression,
            immigration history and most importantly intention to study requirements, working closely with
            the students. Screenings can mirror the academic and financial potential of Nepalese students
            where our counselors are assigned to conduct the process. We offer an online link where
            students can follow our website and fill-in their information for assessment. If there is some
            problems regarding filling form then, don’t hesitate to <span className={styles.contact}>contact us.</span>
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Screening;
