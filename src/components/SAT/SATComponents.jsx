import { motion } from 'framer-motion';
import styles from './SATComponents.module.css';

const SATComponents = () => {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className={styles.mainWrapper}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className={styles.contentWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className={styles.mainHeading}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            SAT Components and Scoring System:
          </motion.h1>

          {/* Reading and Writing Section */}
          <motion.div
            className={styles.sectionWrapper}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.readingHeading}>
              Evidence-Based Reading and Writing (EBRW) Section:
            </h2>
            <motion.table
              className={styles.table}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <tbody>
                {[
                  ['Component', 'Reading Test', 'Writing and Language Test'],
                  ['Purpose', 'Measures reading comprehension and reasoning skills.', 'Assesses grammar, punctuation, sentence structure, and rhetorical skills.'],
                  ['Content', 'Passages from literature, historical documents, social sciences, and scientific articles. May include charts or graphs.', 'Passages covering a range of topics, including careers, humanities, science, and social studies.'],
                  ['Number of Questions', '52', '44'],
                  ['Time Allotted', '65 minutes', '35 minutes'],
                  ['Question Types', 'Multiple Choice, Evidence Support, Data Interpretation', 'Multiple Choice, Editing Tasks']
                ].map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {row.map((cell, idx) => (
                      <td key={idx}>{cell}</td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </motion.div>

          {/* Math Section */}
          <motion.div
            className={styles.sectionWrapper}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.mathHeading}>Math Section</h2>
            <motion.table
              className={styles.table}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <tbody>
                {[
                  ['Portion', 'Calculator Section', 'No-Calculator Section'],
                  ['Purpose', 'Tests problem-solving with a calculator.', 'Measures mathematical skills without a calculator.'],
                  ['Content', 'Algebra, problem-solving, advanced math like Trigonometry and data analysis. Precalculus.', 'Primarily algebra and basic geometry, some data analysis.'],
                  ['Number of Questions', '38 (30 multiple choice, 8 grid-in)', '20 (15 multiple choice, 5 grid-in)'],
                  ['Time Allotted', '55 minutes', '25 minutes'],
                  ['Question Types', 'Multiple Choice, Grid-In', 'Multiple Choice, Grid-In']
                ].map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {row.map((cell, idx) => (
                      <td key={idx}>{cell}</td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SATComponents;
