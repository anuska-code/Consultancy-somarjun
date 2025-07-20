import React from 'react';
import { FaGraduationCap, FaClock, FaBook, FaGlobe, FaUniversity } from 'react-icons/fa';
import styles from './MBAStudyGuide.module.css';

const MBAStudyGuide = () => {
  const colleges = [
    'Kaplan Business School',
    'Charles Sturt University',
    'Excelsia College',
    'Edith Cowan University',
    'Victoria University',
    'Central Queensland University',
    'Australian Catholic University',
    'Federation University',
    'University of Southern Queensland',
    'Southern Cross University'
  ];

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.container}>
        {/* Header Section */}
        <section className={styles.headerSection}>
          <div className={styles.headerContent}>
            <div className={styles.headerTextContainer}>
              <h1 className={styles.mainTitle}>Study MBA in Australia</h1>
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <p className={styles.descriptionText}>
              MBA refers to Masters in Business Administration. MBA is turning out to be the go-to course for Nepalese entrepreneurs, financial staffs and other. A good MBA course can provide you with adequate knowledge to run your own business or to be able to handle businesses with ease.
            </p>
          </div>
        </section>

        {/* Course Description Section */}
        <section className={styles.courseSection}>
          <div className={styles.courseSectionWrapper}>
            <div className={styles.courseInfoContainer}>
              <h2 className={styles.sectionTitle}>Course description</h2>
              <div className={styles.courseDetails}>
                <div className={styles.courseDetailItem}>
                  <FaClock className={styles.detailIcon} />
                  <span className={styles.detailLabel}>Course duration</span>
                </div>
                <p className={styles.courseDetailText}>
                  Average course duration for MBA in Australia is 2 years (Average).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className={styles.requirementsSection}>
          <div className={styles.requirementsSectionWrapper}>
            <div className={styles.requirementsContainer}>
              <h2 className={styles.sectionTitle}>Requirements</h2>

              <div className={styles.requirementBlock}>
                <h3 className={styles.requirementSubtitle}>Academic Requirements</h3>
                <p className={styles.requirementText}>
                  Two to Five years of relevant managerial work experience which varies from university to university.
                </p>
              </div>

              <div className={styles.requirementBlock}>
                <h3 className={styles.requirementSubtitle}>English Requirements</h3>
                <ul className={styles.requirementList}>
                  <li className={styles.requirementListItem}>
                    <span className={styles.testName}>IELTS (Academic)</span> - 6.0 overall (scores no less than 6.0 for Speaking and Writing and 5.5 for Listening and Reading)
                  </li>
                  <li className={styles.requirementListItem}>
                    <span className={styles.testName}>TOEFL internet-based (iBT)</span> - Overall 60
                  </li>
                  <li className={styles.requirementListItem}>
                    <span className={styles.testName}>Pearson Test of English (Academic) (PTE)</span> - Overall score of 50
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Colleges Section */}
        <section className={styles.collegesSection}>
          <div className={styles.collegesSectionWrapper}>
            <div className={styles.collegesContainer}>
              <h2 className={styles.sectionTitle}>Most affordable business colleges in Australia for MBA:</h2>
              <p className={styles.collegesIntro}>
                We understand how you'd like to study in Australia. So we've decided to make a list of colleges for MBA. The lists are:
              </p>
              <div className={styles.collegesGrid}>
                {colleges.map((college, index) => (
                  <div key={index} className={styles.collegeCard}>
                    <FaUniversity className={styles.collegeIcon} />
                    <span className={styles.collegeName}>{college}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MBAStudyGuide;
