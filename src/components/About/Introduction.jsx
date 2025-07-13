// File: WhyUs.jsx
import React from 'react';
import styles from './Introduction.module.css';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Introduction = () => {
  return (
    <div className={styles.mainWrapper}>
<div className={styles.container}>

      {/* WHY US Section */}
      <div className={styles.sectionWrapper}>
        <div className={styles.imageContainer}>
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            src="\images\Whyus.png"
            alt="Why Us"
          />
        </div>
        <div className={styles.textContainer}>
          <h2>WHY US?</h2>
          <p>
            Hartford Education was founded with a mission to make your study abroad journey EASY and ACCESSIBLE.
            Starting our journey from Japan, Australia, Canada and now extending our footprints globally into UK, USA,
            and Europe, we aim to offer the best solutions to simplify international admissions. In today's competitive world,
            good test scores are not enough to land you in your dream university. A strong profile, well-thought list of universities,
            a winning essay, relevant LORs, an enterprising SOP and a confident interview preparation is what you need to steer you through,
            and we have got it all covered for you!
          </p>
        </div>
      </div>

      {/* VISION Section */}
      <div className={styles.sectionWrapper}>
        <div className={styles.textContainer}>
          <h2>Our Vision</h2>
          <p>
            Our vision is to transform the life of our students with quality access of education, wherever that be in the world.
            The right education helps get exposure to new concepts and ideas which are used to appreciate and improve the world
            around us and the world within us. We are proud to have impacted the lives of our students by providing them such platforms
            and opportunities. Along the years we have emerged as one of the most reliable brands in the higher education space impacting
            thousands of careers till now. To be able to do that for a million+ students across Nepal, is what we aim for.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            src="\images\Our-vision.png"
            alt="Vision"
          />
        </div>
      </div>

      {/* MISSION Section */}
      <div className={styles.sectionWrapper}>
        <div className={styles.imageContainer}>
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            src="\images\our-mission.png"
            alt="Mission"
          />
        </div>
        <div className={styles.textContainer}>
          <h2>Our Mission</h2>
          <p>
            Our mission is to create an ecosystem wherein our partners and universities can showcase the best they have to offer
            and students can choose what suits them the most. As your education partner, we take care of everything from mentoring you
            to selecting the perfect program and assessing applications, helping you earn your student visa. Over the years, we’ve developed
            strong relationships with our university and recruitment partners which puts us in a position to offer scholarships to students
            to eventually help offset their costs of studying abroad. We aim to bring global education within everyone’s reach and accomplish
            it in a very comprehensive way.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Introduction;
