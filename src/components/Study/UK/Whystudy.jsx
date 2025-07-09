import React, { useState } from 'react';
import { FaUniversity, FaUsers, FaHome, FaBriefcase, FaGraduationCap, FaEuroSign, FaHospital, FaClock, FaPlus, FaMinus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Whystudy.module.css';

const sectionsData = [
  {
    key: 'universities',
    icon: <FaUniversity />,
    title: '1/5th of the best universities in the world are in the UK.',
    content: (
      <>
        <p className={styles.contentText}>
          Some of the best universities in the world are in the UK. The University of Cambridge, The University of Oxford, and many other
          universities in the world have been pioneering education to students for centuries. These universities often appear in the QS World
          University Rankings list. One-fifth of the top 50 universities in the QS World University rankings are in the UK.
          <span className={styles.highlightText}> Here are some of the best universities in the UK:</span>
        </p>
        <ul className={styles.universityList}>
          <li>University of Oxford (Ranked 5th by QS)</li>
          <li>University of Cambridge (Ranked 6th by QS)</li>
          <li>Imperial College London (Ranked 8th by QS)</li>
          <li>UCL (Ranked 10th by QS)</li>
          <li>University of Edinburgh (Ranked 18th by QS)</li>
        </ul>
        <p className={styles.contentText}>
          Students can choose to study from a wide range of courses in different disciplines ranging from fashion to physics. Professors that teach in
          UK universities are considered to be the best in the world. British Education system is considered one of the best education systems in
          the world by academics and Global companies as well.
        </p>
      </>
    ),
  },
  {
    key: 'students',
    icon: <FaUsers />,
    title: 'Half a million International Students',
    content: (
      <p className={styles.contentText}>
        Accordion Sample DescripThe UK has seen a huge surge in the international student population in recent years. There were around 485,645 international students in the UK in 2019. With half a million international students, you will not be alone in your journey. A huge number of international students from diverse cultures are studying in different parts of the country which is why you will be studying with like-minded people from different backgrounds and cultures. This will allow you to explore much beyond the books in the classroom.
      </p>
    ),
  },
  {
    key: 'culture',
    icon: <FaHome />,
    title: 'Diverse Culture and rich history',
    content: (
      <p className={styles.contentText}>
        The UK offers a rich cultural heritage with centuries of history, art, and literature. Students can explore museums, historical sites,
        and experience diverse cultures from around the world within the UK's multicultural society.
      </p>
    ),
  },
  {
    key: 'employment',
    icon: <FaBriefcase />,
    title: 'Attractive employment opportunities',
    content: (
      <p className={styles.contentText}>
        The UK provides excellent career opportunities for international students with post-study work visas and connections to
        global companies and industries.
      </p>
    ),
  },
  {
    key: 'employability',
    icon: <FaGraduationCap />,
    title: 'Graduate employability score of Universities in the UK:',
    content: (
      <p className={styles.contentText}>
        UK universities have excellent graduate employability rates, with many institutions ranking highly in global employability surveys.
      </p>
    ),
  },
  {
    key: 'cost',
    icon: <FaEuroSign />,
    title: 'The UK is the cheapest among the Top 3 big student destinations',
    content: (
      <p className={styles.contentText}>
        Compared to other major study destinations like the US and Australia, the UK offers more affordable education options
        while maintaining high quality standards.
      </p>
    ),
  },
  {
    key: 'healthcare',
    icon: <FaHospital />,
    title: 'Free health care for international students',
    content: (
      <p className={styles.contentText}>
        International students in the UK have access to the National Health Service (NHS), providing free healthcare during their studies.
      </p>
    ),
  },
  {
    key: 'duration',
    icon: <FaClock />,
    title: 'Degrees are shorter in the UK',
    content: (
      <p className={styles.contentText}>
        UK undergraduate degrees typically take 3 years and master's degrees take 1 year, allowing students to enter the workforce
        sooner and save on living costs.
      </p>
    ),
  },
];

const Whystudy = () => {
  const [expandedSections, setExpandedSections] = useState({
    universities: true, // default expanded section
  });

  const toggleSection = (key) => {
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className={styles.studywrapper}>
    <div className={styles.studyUkContainer}>
      {/* Header Section */}
      <div className={styles.headerWrapper}>
        <div className={styles.headerContent}>
          <h1 className={styles.mainTitle}>Why should you study in the UK?</h1>
          <p className={styles.headerDescription}>
            Here are some reasons why you should study in the United Kingdom:
          </p>
        </div>
      </div>

      {sectionsData.map(({ key, icon, title, content }) => (
        <div key={key} className={styles.sectionWrapper}>
          <div
            className={styles.sectionHeader}
            onClick={() => toggleSection(key)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && toggleSection(key)}
          >
            <div className={styles.sectionIcon}>{icon}</div>
            <div className={styles.sectionTitleContainer}>
              <h2 className={styles.sectionTitle}>{title}</h2>
            </div>
            <div className={styles.toggleIcon}>
              {expandedSections[key] ? <FaMinus /> : <FaPlus />}
            </div>
          </div>

          <AnimatePresence initial={false}>
            {expandedSections[key] && (
              <motion.div
                className={styles.sectionContent}
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { 
                    opacity: 1, 
                    height: 'auto',
                    transformOrigin: 'top'
                  },
                  collapsed: { 
                    opacity: 0, 
                    height: 0,
                    transformOrigin: 'top'
                  },
                }}
                transition={{ 
                  duration: 0.3, 
                  ease: 'easeInOut',
                  height: {
                    type: "tween",
                    duration: 0.3
                  }
                }}
                style={{ overflow: 'hidden' }}
              >
                {content}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Whystudy;