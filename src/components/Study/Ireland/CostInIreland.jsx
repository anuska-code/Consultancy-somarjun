import React from 'react';
import styles from './CostInIreland.module.css';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CostInIreland = () => {
  return (
    <div className={styles.mainWrapper}>
     <div className={styles.container}>
      <div className={styles.sectionWrapper}>
        <div className={styles.textContent}>
          <h2>Cost of Studying in Ireland</h2>
          <table className={styles.studyTable}>
            <thead>
              <tr>
                <th>Study Level</th>
                <th>Tuition Fee in EUR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bachelor's degree</td>
                <td>9,000 to 45,000 per year</td>
              </tr>
              <tr>
                <td>Master's degree</td>
                <td>9,150 to 37,000 per year</td>
              </tr>
              <tr>
                <td>Doctors' degree</td>
                <td>9,150 to 37,000 per year</td>
              </tr>
            </tbody>
          </table>
        </div>
    
      </div>

      {/* Tuition Fees Section */}
      <div className={styles.sectionWrapper}>
        <div className={styles.textContent}>
          <h2>Average Tuition fee 2024 at top universities in Ireland</h2>
          <table className={styles.tuitionTable}>
            <thead>
              <tr>
                <th>University</th>
                <th>Average Tuition Yearly Fees (EUR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Trinity College Dublin</td>
                <td>7,884 to 35,800</td>
              </tr>
              <tr>
                <td>University College Dublin</td>
                <td>6,840 to 26,400</td>
              </tr>
              <tr>
                <td>National University of Ireland, Galway</td>
                <td>16,216 to 23,666</td>
              </tr>
              <tr>
                <td>University College Cork</td>
                <td>16,080 to 22,130</td>
              </tr>
              <tr>
                <td>Dublin City University</td>
                <td>6,900 to 25,000</td>
              </tr>
              <tr>
                <td>University of Limerick</td>
                <td>6,968 to 13,140</td>
              </tr>
            </tbody>
          </table>
        </div>
     
      </div>

      {/* Living Cost Section */}
      <div className={styles.sectionWrapper}>
        <div className={styles.textContent}>
          <h2>Average cost of living in Ireland 2024</h2>
          <table className={styles.livingTable}>
            <thead>
              <tr>
                <th>Expenses</th>
                <th>Average Living Monthly Cost (EUR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Food</td>
                <td>750 to 1,300</td>
              </tr>
              <tr>
                <td>Internet and Mobile</td>
                <td>30 to 60</td>
              </tr>
              <tr>
                <td>Utilities</td>
                <td>50 to 55</td>
              </tr>
              <tr>
                <td>Travel</td>
                <td>45 to 135</td>
              </tr>
              <tr>
                <td>Personal / Social</td>
                <td>90 to 225</td>
              </tr>
              <tr>
                <td>Clothing and Hygiene</td>
                <td>80 to 200</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CostInIreland;