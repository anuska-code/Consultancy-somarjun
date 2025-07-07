import React from 'react';
import styles from './IeltsTable.module.css';
import { motion } from 'framer-motion';

const IeltsTable = () => {
  return (
    <>
      <motion.div
        className={styles.tableWrapper}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.tablewrap}>
          {/* Heading */}
          <motion.div
            className={styles.Text}
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>IELTS Test Format in Detail:</h3>
          </motion.div>

          {/* Table */}
          <motion.table
            className={styles.table}
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <thead>
              <tr>
                <th>Test Section</th>
                <th>Time Allocation</th>
                <th>Total Number of Questions</th>
                <th>Item Types</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Listening", "30 minutes", "40 items", [
                  "Multiple Choice, Matching, Plan/Map/Diagram Labeling",
                  "Form/Narrative/Note/Flowchart/Summary Completion",
                  "Sentence Completion"
                ]],
                ["Reading", "60 minutes", "40 items", [
                  "Multiple Choice, Matching, Plan/Map/Diagram Labeling",
                  "Summary/Ideas/Information/Opinion Completion",
                  "True/False/, Yes/No",
                  "Sentence/Summary/Note/Table/Flowchart/Matching",
                  "Diagram/Chart/Graph/Figure Classification"
                ]],
                ["Writing", "60 minutes", "1 Task", [
                  "Task 1: Graph/Table/Chart/Diagram Description",
                  "Task 2: Essay Writing"
                ]],
                ["Speaking", "11-15 minutes", "1 Task", [
                  "Part 1: Introduction and Interview",
                  "Part 2: Individual Long Turn (Cue card)",
                  "Part 3: Two-way Discussion"
                ]]
              ].map((section, i) => {
                const [test, time, questions, items] = section;
                return items.map((item, j) => (
                  <motion.tr
                    key={`${i}-${j}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.2 + j * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {j === 0 && (
                      <>
                        <td rowSpan={items.length}>{test}</td>
                        <td rowSpan={items.length}>{time}</td>
                        <td rowSpan={items.length}>{questions}</td>
                      </>
                    )}
                    <td>{item}</td>
                  </motion.tr>
                ));
              })}
            </tbody>
          </motion.table>
        </div>
      </motion.div>
    </>
  );
};

export default IeltsTable;
