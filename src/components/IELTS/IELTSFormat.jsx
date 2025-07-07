import React from 'react';
import styles from './IELTSFormat.module.css';
import { FaChevronDown, FaPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';

const IELTSFormat = () => {
  const sections = ['Listening', 'Writing', 'Reading', 'Speaking'];

  return (
    <>
      <div className={styles.ieltsFormatWrapper}>
        <motion.div
          className={styles.ieltsFormat}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <motion.div
            className={styles.text}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className={styles.heading}>Format of the IELTS Test</h2>
          </motion.div>

          {/* Content Wrapper */}
          <motion.div
            className={styles.contentWrapper}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Left Image */}
            <motion.div
              className={styles.imageContainer}
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/ielts.png"
                alt="IELTS Test Format"
                className={styles.ieltsImage}
              />
            </motion.div>

            {/* Right Buttons */}
            <motion.div
              className={styles.buttonContainer}
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  className={styles.button}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.leftIcon}>
                    <FaChevronDown />
                  </div>
                  <span className={styles.label}>{section}</span>
                  <div className={styles.rightIcon}>
                    <FaPlus />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default IELTSFormat;
