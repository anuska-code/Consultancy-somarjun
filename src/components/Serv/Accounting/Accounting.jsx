import React from "react"; 
import styles from "./Accounting.module.css";
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

const Accounting = () => {
  return (
    <motion.div
      className={styles.wrapper}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div className={styles.container} variants={staggerContainer}>

        {/* Heading Div */}
        <motion.div variants={fadeInUp}>
          <h2 className={styles.heading}>Accounting Services</h2>
        </motion.div>

        {/* Wrapper Div for Image + Text */}
        <motion.div className={styles.contentWrapper} variants={staggerContainer}>
          {/* Text Section */}
          <motion.div className={styles.textContainer} variants={fadeInUp}>
            <div className={styles.textWrapper}>
              <p className={styles.texts}>
                Our team of management accountants focuses on looking forward (rather than backward at
                historical data). We work with you on planning, budgeting and forecasting. Every month, we
                provide you with accurate, up-to-date financial reports. We also meet with you monthly to
                review the data, flag any areas of concern and discuss improving strategies to get you and
                your business on the right track.
              </p>

              <p className={styles.subtext}>We will provide:</p>
              <ul className={styles.list}>
                <li>Payroll</li>
                <li>Reconciliations and BAS</li>
                <li>End of Month Reports</li>
                <li>Budgets and Forecasting</li>
                <li>Cashflow Management</li>
                <li>Financial Analysis</li>
                <li>Monthly Meetings</li>
              </ul>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div className={styles.imageContainer} variants={fadeInUp}>
            <div className={styles.imageWrapper}>
              <img
                src="\images\Accounts.png"
                alt="Accounting Services"
                className={styles.image}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Accounting;
