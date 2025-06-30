import React from 'react'
import styles from './IELTSFormat.module.css';
import { FaChevronDown, FaPlus } from 'react-icons/fa';

const IELTSFormat = () => {
     const sections = ['Listening', 'Writing', 'Reading', 'Speaking'];

  return (
    <>
        <div className={styles.ieltsFormatWrapper}>
              <div className={styles.ieltsFormat}>
            <div className={styles.text}>
      <h2 className={styles.heading}>Format of the IELTS Test</h2>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.imageContainer}>
          <img
            src="/images/ielts.png" 
            alt="IELTS Test Format"
            className={styles.ieltsImage}
          />
        </div>

        <div className={styles.buttonContainer}>
          {sections.map((section, index) => (
            <div key={index} className={styles.button}>
              <div className={styles.leftIcon}>
                <FaChevronDown />
              </div>
              <span className={styles.label}>{section}</span>
              <div className={styles.rightIcon}>
                <FaPlus />
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default IELTSFormat;