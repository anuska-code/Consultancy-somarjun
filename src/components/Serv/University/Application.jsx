// UniversityApplication.jsx
import React from 'react';
import styles from './Application.module.css';
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

const Application = () => {
  return (
    <motion.div
      className={styles.wrapper}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className={styles.container}>
        <motion.div className={styles.headerSection} variants={fadeInUp}>
          <h1 className={styles.heading}>University Application Assistance</h1>
          <p className={styles.breadcrumb}>
            Home <span className={styles.active}>/ UNIVERSITY APPLICATION ASSISTANCE</span>
          </p>
        </motion.div>

        <motion.div className={styles.textSection} variants={staggerContainer}>
          <motion.p variants={fadeInUp}>
            Students’ lives depend on academic support. Due to a lack of information and support,
            many students are choosing an online platform for their academic demands, which puts them
            under academic stress. An application assistance team is available to you through The Next
            Education Consultancy to help you complete the university admission process.
          </motion.p>

          <motion.p variants={fadeInUp}>
            The University application assistance team of Next Consultancy assist students to choose the
            level of degree he/she applies for, and direct them to correct form to fill in. It plays a
            vital role if the applicant is unsure which major they wish to study. The team provides
            entire support for enrollment, offer letters and the process of confirmation of enrollment.
            We are going to assist you all without charge in your efforts to enroll in universities.
          </motion.p>

          <motion.p variants={fadeInUp}>
            Send your whole document package to us via <span className={styles.contact}>email</span>. Our
            application assistance team is in regular touch with universities and students as a liaison
            body. This team believes in prompt action to overcome complications during the entire
            admission process.
          </motion.p>

          <motion.p variants={fadeInUp}>
            If you feel uneasy to contact us, then we’ve provided online enquiry on our website. You can
            freely fill <span className={styles.contact}>enquiry</span> form to know more about universities
            and <span className={styles.contact}>courses</span>.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Application;
