import React from 'react';
import { motion } from 'framer-motion';
import styles from './StudyInCanada.module.css';

const StudyInCanada = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainContainer}>

        {/* Introduction Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={styles.introSection}
        >
          <div className={styles.introContent}>
            <h2 className={styles.mainHeading}>
              Know why Canada is so popular with International students?
            </h2>
            <div className={styles.orangeUnderline}></div>
            <p className={styles.introText}>
              With nearly half a million international students, Canada is renowned for offering high-quality education at affordable tuition rates, along with globally recognized degrees. Coupled with an outstanding quality of life and abundant post-study work and immigration opportunities, <strong>studying in Canada from Nepal</strong> has become an increasingly popular choice for Nepalese students looking to pursue their education abroad.
            </p>
          </div>
        </motion.div>

        {/* Student Visa Requirements Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={styles.visaSection}
        >
          <div className={styles.visaContent}>
            <h2 className={styles.sectionHeading}>
              Student visa requirements for Nepalese students to study in Canada
            </h2>
            <div className={styles.visaTextContent}>
              <p className={styles.visaText}>
                To <strong>study in Canada</strong> students require a study permit. While a <span className={styles.blueLink}>student visa</span> authorises your entry into Canada, a study permit validates your stay in Canada. It is a mandatory immigration document for an <span className={styles.blueLink}>international student</span>.
              </p>
              <p className={styles.visaText}>
                If you hold a study permit, you must remain enrolled and make reasonable and timely progress towards completing your course.
              </p>
              <p className={styles.visaText}>
                Your study permit is always accompanied by a visitor visa or Electronic Travel Authorization (ETA). Please note that a study permit is a document that allows you to pursue education, while a visitor visa or ETA allows you to enter Canada. Your expert will help you access the latest information and connect you with authorised migration experts.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Cost of Studying Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={styles.costSection}
        >
          <div className={styles.costContent}>
            <h2 className={styles.sectionHeading}>
              Cost of studying in Canada for Nepalese students
            </h2>
            <div className={styles.costTextContent}>
              <p className={styles.costText}>
                Your expenditure on tuition fees depends on the type of qualification and institution you opt for. To cover this, you will need approximately between CAD 13,000 - CAD 35,000 a year.
              </p>
              <p className={styles.costText}>
                Most commonly, courses in humanities, education, and arts are a little cheaper, while subjects such as medicine and engineering are likely to be more expensive. If you wish to study at a postgraduate level, the tuition fee is typically higher, and the costs vary depending on the program. As with most other countries, MBA programs are often the most expensive. The average cost for these programs ranges between CAD 30,000-42,000.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default StudyInCanada;
