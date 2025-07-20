import React from 'react';
import styles from './StudyIT.module.css';
import { motion } from 'framer-motion';

const StudyIT = () => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.mainContainer}>
      {/* Header Section */}
      <motion.div
        className={styles.section}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className={styles.sectionTitle}>Study Information Technology (IT) in Australia</h1>

        <div className={styles.textBlock}>
          <p className={styles.descriptionText}>
            Information Technology is a field of study that includes computers and other electronic devices for communication and other purposes.
          </p>
        </div>

        <div className={styles.textBlock}>
          <p className={styles.descriptionText}>
            With the growing use of technology like cell phones, smart watches, laptops, gaming consoles, etc., IT is an industry that recruits more personnel than any other industry.
          </p>
        </div>

        <div className={styles.textBlock}>
          <p className={styles.descriptionText}>
            A lot of <span className={styles.highlightText}>Nepali students go abroad (specifically to Australia) to study Information Technology.</span>
          </p>
        </div>

        <div className={styles.textBlock}>
          <p className={styles.descriptionText}>
            Even in a developing country like Nepal, IT has bloomed and hence created a large number of job vacancies for IT graduates.
          </p>
        </div>
      </motion.div>

      {/* Why Study IT */}
      <motion.div
        className={styles.section}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.sectionTitle}>Why study Information Technology in Australia?</h2>

        <div className={styles.reasonBlock}>
          <p className={styles.reasonText}>
            The following are some reasons why studying Information Technology can be a good idea or why pursue a career in Information Technology:
          </p>
        </div>

        <div className={styles.reasonBlock}>
          <p className={styles.reasonText}>
            IT Industry in Australia is predicted to be the largest recruiter in terms of vacancy and industry growth.
          </p>
        </div>

        <div className={styles.reasonBlock}>
          <p className={styles.reasonText}>
            IT has a potential for higher salary and revenue for the graduates in Australia and around the world due to its global standard certification.
          </p>
        </div>

        <div className={styles.reasonBlock}>
          <p className={styles.reasonText}>
            You can choose your own career path according to your own interests and career aspirations which allows you to specialize at a certain subfield.
          </p>
        </div>

        <div className={styles.reasonBlock}>
          <p className={styles.reasonText}>
            You can learn while working (work integrated learning) which provides skills set that can be used directly into the work environment.
          </p>
        </div>
 <div className={styles.statistics}>
        <div className={styles.statisticsBlock}>
          <p className={styles.statisticsText}>
            In 2017, 415,100 people were reported to be employed in an IT-related position in Australia.
          </p>
        </div>

        <div className={styles.statisticsBlock}>
          <p className={styles.statisticsText}>
            Between now and 2022, 151,200 new IT-related jobs are predicted to be created, which will create a lot of job opportunities for IT graduates.
          </p>
        </div>
        </div>
      </motion.div>

      {/* Entry Requirements */}
      <motion.div
        className={styles.section}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.sectionTitle}>Entry requirements to study Information Technology (IT) in Australia</h2>

       
      </motion.div>

      {/* IELTS Info */}
      <motion.div
        className={styles.section}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className={styles.subTitle}>How much IELTS score is required to study IT in Australia?</h3>

        <div className={styles.ieltsBlock}>
          <p className={styles.ieltsText}>
            Generally, the IELTS score required is an overall score of 6.0 or more (no band less than 5.5).
          </p>
        </div>

        <div className={styles.ieltsBlock}>
          <p className={styles.ieltsText}>
            The IELTS score obviously varies per institution.
          </p>
        </div>

        <div className={styles.ieltsBlock}>
          <p className={styles.ieltsText}>
            For example, the IELTS score required to study undergraduate of IT in the University of Melbourne is 7.0, whereas for the University of Sydney is 6.5 and for University of Adelaide is as low as 5.5.
          </p>
        </div>

        <div className={styles.sourceBlock}>
          <p className={styles.sourceText}>Source: IELTS ASIA</p>
        </div>

        <div className={styles.linkBlock}>
          <p className={styles.linkText}>
            If you want to know more about IELTS, <span className={styles.linkHighlight}>here's an ultimate guide to IELTS.</span>
          </p>
        </div>
      </motion.div>

      {/* Diploma Section */}
      <motion.div
        className={styles.section}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.sectionTitle}>Diploma/Advanced Diploma in Information Technology (IT)</h2>

        <h3 className={styles.subTitle}>Course Description</h3>
        <div className={styles.descriptionBlock}>
          <p className={styles.courseText}>
            An advanced diploma is a certification that a student has successfully completed a specific course.
          </p>
        </div>

        <div className={styles.descriptionBlock}>
          <p className={styles.courseText}>
            <span className={styles.highlightText}>Diploma requires less time to complete (52 weeks) and is a cheaper alternative to polish your skills.</span>
          </p>
        </div>

        <h3 className={styles.subTitle}>Entry Requirements</h3>
        <div className={styles.diplomaRequirementBlock}>
          <p className={styles.diplomaRequirementText}>
            Completion of Australian year 12 or equivalent
          </p>
        </div>
      </motion.div>
    </div>
    </div>
  );
};

export default StudyIT;
