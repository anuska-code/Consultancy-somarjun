import React from 'react';
import styles from './Institution.module.css';
import { motion } from 'framer-motion';
import data from './unidata.json';

// Import needed icons from react-icons
import { FaUniversity, FaSchool, FaGraduationCap } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';

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

// Map icon string names to React components
const iconMap = {
  FaUniversity: FaUniversity,
  FaSchool: FaSchool,
  FaGraduationCap: FaGraduationCap,
  MdSchool: MdSchool
};

const Institution = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {data.map((section, i) => (
          <motion.section
            key={i}
            className={styles.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerStagger}
          >
            <div className={styles.countryTitle}>{section.country}</div>
            <div className={styles.cardGrid}>
              {section.institutions.map((inst, index) => {
                const IconComponent = iconMap[inst.icon];
                return (
                  <motion.a
                    key={index}
                    href={inst.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.card}
                    variants={fadeInUp}
                  >
                    <img
                      src={inst.image}
                      alt={inst.title}
                      className={styles.cardImage}
                    />
                    <div className={styles.cardContent}>
                      {IconComponent && <IconComponent className={styles.icon} />}
                      <div className={styles.cardTitle}>{inst.title}</div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default Institution;
