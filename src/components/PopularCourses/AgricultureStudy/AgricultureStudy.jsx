import React from 'react';
import styles from './AgricultureStudy.module.css';

const AgricultureStudy = () => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.mainContainer}>
      {/* Header Section */}
      <section className={styles.headerWrapper}>
        <div className={styles.headerContent}>
          <div className={styles.headerTextDiv}>
            <h1 className={styles.mainTitle}>Study Agriculture in Australia</h1>
            <div className={styles.headerDescription}>
              <p className={styles.headerParagraph}>
                Nepal is an agricultural country. According to Wikipedia, agriculture is accounted for, on average, about 60 percent of the GDP and approximately 75 percent of exports. A lot of Nepalese students take forestry(which falls under Agriculture and Veterinary)
              </p>
              <p className={styles.headerParagraph}>
                If you are willing to study agriculture just so that you can comeback and do something in Nepal, that's a great idea. The fun thing about studying agriculture in Australia is, even if you are planning to build your career in Australia instead, that'll serve the purpose too. Australia is also a major agricultural producer and exporter.
              </p>
              <p className={styles.headerParagraph}>
                Australian government is looking for more agriculture manpower for the growing need of the Agriculture workforce which is expected to ease the visa process as well.
              </p>
            </div>
          </div>
          <div className={styles.headerImageDiv}>
            <img 
              src="\images\agriculture.png" 
              alt="Agriculture study guide" 
              className={styles.headerImage}
            />
          </div>
        </div>
      </section>

      {/* Why Study Agriculture Section */}
      <section className={styles.whyStudyWrapper}>
        <div className={styles.whyStudyContent}>
          <h2 className={styles.sectionTitle}>Why study Agriculture in Australia?</h2>
          <div className={styles.reasonsList}>
            <div className={styles.reasonItem}>
              <span className={styles.bulletPoint}>•</span>
              <span className={styles.reasonText}>Australia is one of the biggest agricultural country</span>
            </div>
            <div className={styles.reasonItem}>
              <span className={styles.bulletPoint}>•</span>
              <span className={styles.reasonText}>Preference in recent days for agriculture workforce by Australian Government</span>
            </div>
            <div className={styles.reasonItem}>
              <span className={styles.bulletPoint}>•</span>
              <span className={styles.reasonText}>A lot of scholarships available in agriculture studies</span>
            </div>
            <div className={styles.reasonItem}>
              <span className={styles.bulletPoint}>•</span>
              <span className={styles.reasonText}>Globally accepted degree and on demand skills.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className={styles.requirementsWrapper}>
        <div className={styles.requirementsContent}>
          <h2 className={styles.sectionTitle}>What are the requirements to study Agriculture in Australia?</h2>
          <p className={styles.requirementsIntro}>
            The requirement varies from one college to another. The chief requirements to study Agriculture in Australia are good English proficiency and good academic score.
          </p>
        </div>
      </section>

      {/* Universities Section */}
      <section className={styles.universitiesWrapper}>
        <div className={styles.universitiesContent}>
          <h2 className={styles.sectionTitle}>University that offer Agriculture in Australia</h2>
          <p className={styles.universitiesIntro}>
            These are the universities and colleges that offer Agriculture in Australia :
          </p>
          <div className={styles.universityList}>
            <div className={styles.universityItem}>
              <span className={styles.bulletPoint}>•</span>
              <span className={styles.universityName}>University of Southern Queensland</span>
            </div>
            <div className={styles.universityItem}>
              <span className={styles.bulletPoint}>•</span>
              <span className={styles.universityName}>University of Tasmania</span>
            </div>
            <div className={styles.universityItem}>
              <span className={styles.bulletPoint}>•</span>
              <span className={styles.universityName}>University of New England</span>
            </div>
            <div className={styles.universityItem}>
              <span className={styles.bulletPoint}>•</span>
              <span className={styles.universityName}>Melbourne Polytechnic</span>
            </div>
          </div>

          <div className={styles.studyLevels}>
            <div className={styles.studywrap}>
            <h3 className={styles.subTitle}>For undergraduate study :</h3>
            <div className={styles.requirementsList}>
              <p className={styles.requirementText}>
                <strong>English Language Requirements:</strong> IELTS overall score of 6 with no band below 5.5;
              </p>
              <p className={styles.requirementText}>
                <strong>TOEFL iBT:</strong> 64; PTE Academic score of 50;
              </p>
              <p className={styles.requirementText}>
                <strong>Cambridge English scale:</strong> CAE and CPE: 169.
              </p>
            </div>
            </div>

          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default AgricultureStudy;