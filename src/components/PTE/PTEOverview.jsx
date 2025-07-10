import React from 'react';
import { motion } from 'framer-motion';
import styles from './PTEOverview.module.css';

const PTEOverview = () => {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className={styles.mainContainer}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Top Section with Heading and Intro Paragraph */}
        <motion.div
          className={styles.contentsWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.textSection}>
            <h1 className={styles.heading}>PTE Overview</h1>
            <p className={styles.paragraph}>
              The Pearson Test of English (PTE) is a computer-based English language proficiency exam that assesses the reading, writing, speaking, and listening skills of non-native English speakers. It is widely recognized and accepted by universities, colleges, and government bodies across the globe. PTE offers a fair and unbiased evaluation by using AI-powered scoring systems that ensure consistency and accuracy. The test is designed to reflect real-life academic and general English usage, making it an excellent choice for those planning to study, work, or migrate abroad. With flexible test dates, fast results (usually within 48 hours), and availability in over 70 countries, PTE has become one of the most preferred English proficiency tests worldwide.
            </p>
          </div>
        </motion.div>

        {/* Cards Section */}
        <motion.div
  className={styles.cardGrid}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
  <div className={styles.cardsWrapper}> {/* <-- New wrapper div */}
    {[
      ['01 FULL FORM', 'Pearson Test of English', '#7FB3D5'],
      ['02 YEAR STARTED', '2002', '#F1948A'],
      ['03 SCORE/GRADE RANGE', 'Ranges from 10 to 90', '#7FB3D5'],
      ['04 Test Score/Grade Validity', '1-2 Years', '#F1948A'],
      ['05 Total Test Duration', '2 hours', '#7FB3D5'],
      ['06 Annual no of test takers', 'Over 3 million in 2021', '#F1948A'],
      ['07 Test official authorities', 'Pearson Education Ltd.', '#7FB3D5'],
      ['08 Countries/Regions', '40+ global test centers over 70 countries', '#F1948A'],
    ].map(([title, desc, color], index) => (
      <motion.div
        key={index}
        className={styles.card}
        style={{ backgroundColor: color }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <h3>{title}</h3>
        <p>{desc}</p>
      </motion.div>
    ))}
  </div>
</motion.div>


        {/* Description + Image Section */}
        <motion.div
          className={styles.infoSectionWrapper}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subHeading}>What is PTE?</h2>
          <div className={styles.infoAndImageWrapper}>
            {/* Text */}
            <motion.div
              className={styles.infoTextSection}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className={styles.description}>
                PTE (Pearson Test of English) (Academic) is an English language proficiency test designed to assess the competence or the language ability level of non-native English speakers. It evaluates four main skills—Speaking, Writing, Reading, and Listening—through an integrated testing format that closely mirrors real-world academic communication. PTE is known for its fast and reliable results, delivered typically within 1 to 2 business days. It is accepted by thousands of universities, colleges, and government agencies in countries such as the UK, Australia, New Zealand, Canada, and the USA. The computer-based format and AI scoring system help eliminate human bias, ensuring an accurate representation of a test taker’s true ability. The test duration is around two hours, and its validity typically lasts for two years. Its global reach, efficient delivery, and accurate scoring make PTE a top choice for test takers aiming to advance their academic or professional journey.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              className={styles.imageContainer}
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className={styles.imageWrapper}>
                <img
                  src="/images/ielts.png"
                  alt="IELTS Test Format"
                  className={styles.ieltsImage}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PTEOverview;
