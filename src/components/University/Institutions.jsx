import React from 'react';
import styles from './Institutions.module.css';
import { FaUniversity, FaSchool, FaGraduationCap } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Institutions = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>

        {/* Canada Section */}
        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
        >
          <h2 className={styles.heading}>CANADA</h2>
          <div className={styles.logoGrid}>
            {[
              [<FaUniversity />, 'Royal Roads University'],
              [<FaSchool />, 'Suncrest College'],
              [<FaSchool />, 'NorQuest College'],
              [<FaGraduationCap />, 'Capilano University'],
              [<FaUniversity />, 'Trinity Western University'],
              [<MdSchool />, 'Georgian College'],
              [<FaSchool />, 'Centennial College'],
              [<MdSchool />, 'Durham College'],
              [<FaUniversity />, 'Fleming College'],
              [<FaSchool />, 'Niagara College']
            ].map(([Icon, name], index) => (
              <motion.div key={index} className={styles.item} variants={fadeInUp}>
                {Icon} {name}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* New Zealand Section */}
        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
        >
          <h2 className={styles.heading}>NEW ZEALAND</h2>
          <div className={styles.logoGrid}>
            {[
              [<FaUniversity />, 'Study Group'],
              [<MdSchool />, 'West Coast Polytechnic'],
              [<FaSchool />, 'Unitec'],
              [<FaUniversity />, 'UCOL'],
              [<FaGraduationCap />, 'Toi Ohomai'],
              [<FaSchool />, 'NorthTec'],
              [<FaSchool />, 'NMIT'],
              [<MdSchool />, 'NZMA'],
              [<FaUniversity />, 'Massey University'],
              [<FaSchool />, 'Aspire2 International']
            ].map(([Icon, name], index) => (
              <motion.div key={index} className={styles.item} variants={fadeInUp}>
                {Icon} {name}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* UK Section */}
        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
        >
          <h2 className={styles.heading}>UK</h2>
          <div className={styles.logoGrid}>
            {[
              [<FaUniversity />, 'Solent University'],
              [<FaGraduationCap />, 'UWE Bristol'],
              [<FaUniversity />, 'University of Salford'],
              [<FaSchool />, 'Study Group'],
              [<MdSchool />, 'Accelerate Education'],
              [<FaUniversity />, 'University of Chichester'],
              [<FaSchool />, 'Malvern International'],
              [<FaUniversity />, 'University of East London'],
              [<FaUniversity />, 'University of Greenwich'],
              [<FaUniversity />, 'Coventry University']
            ].map(([Icon, name], index) => (
              <motion.div key={index} className={styles.item} variants={fadeInUp}>
                {Icon} {name}
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default Institutions;
