import React from "react";
import styles from "./Documentation.module.css";
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

const Documentation = () => {
  return (
    <motion.div
      className={styles.wrapper}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div className={styles.container} variants={staggerContainer}>

        {/* Heading */}
        <motion.div variants={fadeInUp}>
          <h2 className={styles.heading}>Documentation</h2>
        </motion.div>

        {/* Content wrapper */}
        <motion.div className={styles.contentWrapper} variants={staggerContainer}>
          {/* Text Section */}
          <motion.div className={styles.textContainer} variants={fadeInUp}>
            <div className={styles.textWrapper}>
              <p className={styles.texts}>
                Proposals, processes, plans – whatever the type of business or technical documentation, you
                need more than just words. So, the way your documents are put together matters. How they
                look is just as important as how they read. Artful writing and presentation transform your
                documents and transfixes your readers.
              </p>

              <p className={styles.texts}>
                As well as doing the writing and editing to make a document easy to read and understand,
                Merit Services will make sure it looks just right, too.
              </p>

              <p className={styles.subtext}>We will provide:</p>
              <ul className={styles.list}>
                <li>Immigration document guideline</li>
                <li>Immigration document editing</li>
                <li>Business document editing</li>
              </ul>
            </div>
          </motion.div>

          {/* Image Section (combined wrapper + container) */}
          <motion.div className={styles.imageContainer} variants={fadeInUp}>
            <img
              src="\images\Documentation.png"
              alt="Documentation Image"
              className={styles.image}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Documentation;
