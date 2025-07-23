// InterviewGuide.jsx
import React from "react";
import styles from "./InterviewGuide.module.css";
import { motion } from "framer-motion";

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

const InterviewGuide = () => {
  return (
    <motion.div
      className={styles.wrapper}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className={styles.container}>
        <motion.div className={styles.headerSection} variants={fadeInUp}>
          <h1 className={styles.heading}>Interview Guidance</h1>
          <p className={styles.breadcrumb}>
            Home <span className={styles.active}>/ INTERVIEW GUIDANCE</span>
          </p>
        </motion.div>

        <motion.div className={styles.textSection} variants={staggerContainer}>
          <motion.p variants={fadeInUp}>
            While interviews are not part of every university’s admission process, many institutions
            will ask students to meet online before accepting their application. The Next Team assists
            students to prepare for the behavioral interview questions and answers to show their
            potential to study at the university.
          </motion.p>

          <motion.p variants={fadeInUp}>
            As interviews are scary at the best of times, our guidance gives them a better chance at
            successfully getting a place at an institution. It also prepares students to control their
            nerves before stepping into the interview with the admission team of the institution.
          </motion.p>

          <motion.p variants={fadeInUp}>
            This preparation also helps students for interview by DIBP.
          </motion.p>

          <motion.p variants={fadeInUp}>
            Several guidelines for student visa behavioral interview questions answers:
          </motion.p>
        </motion.div>

        <motion.ol className={styles.listSection} variants={staggerContainer}>
          <motion.li variants={fadeInUp}>
            <strong>Remain Punctual</strong><br />
            Avoid being both early and late. Make sure to get there a little early so you can relax
            and get ready for the interview.
          </motion.li>

          <motion.li variants={fadeInUp}>
            <strong>Greetings to everybody</strong><br />
            Every time you face the particular instance authorities, make sure to extend a friendly
            greeting in order to make a favorable impression.
          </motion.li>

          <motion.li variants={fadeInUp}>
            <strong>Wear comfortable</strong><br />
            Wear whatever makes you feel good. Wear anything that gives you a professional and
            assured appearance. Do not overstate. Simplicity is preferable.
          </motion.li>

          <motion.li variants={fadeInUp}>
            <strong>Carry all proper documentation</strong><br />
            Bring all necessary documentation for the student visa, such as original bank statements
            or proof of qualifications. Verify everything again to be sure.
          </motion.li>

          <motion.li variants={fadeInUp}>
            <strong>Be truthful and honest</strong><br />
            Deliver sincere responses that are matched with supporting evidence. Make sure your
            responses are clear, thorough, and correct.
          </motion.li>
        </motion.ol>

        <motion.div className={styles.paragraphSection} variants={fadeInUp}>
          <p className={styles.finalText}>
            If you have some doubt on behavioral interview questions and answers, then you can freely{" "}
            <span className={styles.contact}>contact us.</span>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InterviewGuide;
