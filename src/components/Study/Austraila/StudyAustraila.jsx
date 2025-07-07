import React from 'react';
import styles from './StudyAustraila.module.css';
import { motion } from 'framer-motion';

const StudyAustraila = () => {
  return (
    <div className={styles.studyWrapper}>
      <div className={styles.studyContent}>
        {/* Heading */}
        <motion.h2
          className={styles.mainHeading}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Study in Australia from Nepal?
        </motion.h2>

        {/* Text + Image Section */}
        <motion.div
          className={styles.topSectionWrapper}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Text Block */}
          <div className={styles.topTextBlock}>
            <div className={styles.topTextInner}>
              <p>
                Australia is not only a student destination but also a dynamic and technologically vibrant country offering an excellent educational and career life.
              </p>
              <p>
                Australia is a highly sought <span className={styles.highlight}>study destination</span> for Nepalese students due to its excellent education, high-quality lifestyle, and welcoming environment.
              </p>
              <p>
                With over <strong>1,100 institutions</strong>, including prestigious universities, it offers abundant opportunities for students to pursue their desired fields like language, nursing, and medicine.
              </p>
            </div>
          </div>

          {/* Image Block */}
          <motion.div
            className={styles.imageBlock}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/studyImg.png"
              alt="Study in Australia"
              className={styles.studyImage}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Facts Section */}
      <motion.div
        className={styles.factsSectionWrapper}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className={styles.factsSection}>
          <h3 className={styles.factsHeading}>Facts about Australia</h3>
          <div className={styles.factsGrid}>
            <motion.div
              className={styles.factsColumn}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ul className={styles.factsList}>
                <li>Australia is the 13th-largest economy and ranks 5th in global per capita income.</li>
                <li>It is recognized as the <strong>4th happiest country</strong> in the world.</li>
                <li>Over 260 languages are actively spoken across the country.</li>
                <li>Five Australian cities rank among the top 30 for international students.</li>
                <li>Eight universities are ranked among the top 100 globally.</li>
              </ul>
            </motion.div>
            <motion.div
              className={styles.factsColumn}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ul className={styles.factsList}>
                <li>Australia ranks 9th globally for the strength of its university system.</li>
                <li>It is the <strong>3rd most preferred destination</strong> for global students.</li>
                <li>Five cities are listed among the top 40 for urban infrastructure quality.</li>
                <li>Melbourne has been named the <strong>most liveable city</strong> for three years.</li>
                <li>The country offers strong support services for international student success.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Reasons Section */}
      <motion.div
        className={styles.reasonsSectionWrapper}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className={styles.reasonsTextBlock}>
          <h3>Reasons to Study in Australia</h3>
          <div className={styles.reasonsColumns}>
            <div className={styles.reasonsColumn}>
              {[
                ["1. High-Quality Education", "Renowned for high academic standards, offering a wide range of courses."],
                ["2. Global Recognition", "Degrees are globally accepted and respected by employers and institutions."],
                ["3. Cultural Diversity", "A multicultural country that provides a global learning perspective."],
                ["4. Research Opportunities", "Leading in research and innovation with access to world-class facilities."],
                ["5. Vibrant Lifestyle", "High living standards, beautiful cities, and a welcoming atmosphere."]
              ].map(([title, desc], index) => (
                <motion.div
                  key={index}
                  className={styles.reasonItem}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </motion.div>
              ))}
            </div>

            <div className={styles.reasonsColumn}>
              {[
                ["6. Work Opportunities", "Students can work part-time during studies and gain post-study work rights."],
                ["7. English Language", "Opportunity to improve English skills in an English-speaking environment."],
                ["8. Safety and Support", "Safe environment with strong support systems for international students."],
                ["9. Natural Beauty", "Stunning landscapes, beaches, and unique wildlife to explore."],
                ["10. Pathway to Migration", "Potential pathways to permanent residency for qualified graduates."]
              ].map(([title, desc], index) => (
                <motion.div
                  key={index}
                  className={styles.reasonItem}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 5) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StudyAustraila;
