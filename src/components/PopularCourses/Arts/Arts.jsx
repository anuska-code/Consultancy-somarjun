import React from 'react';
import styles from './Arts.module.css';

const Arts = () => {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.container}>
      <section className={styles.headerSection}>
        <div className={styles.headerContent}>
          <div className={styles.headerTextContainer}>
            <h1 className={styles.mainTitle}>Study Arts in Australia</h1>
            <p className={styles.headerDescription}>
              A growing number of Australians believe that the arts make for a richer and more meaningful life; they influence how we express ourselves, our creative thinking and new ideas.
            </p>
            <p className={styles.headerDescription}>
              With the appreciation the demand also is rising for the design arts graduate.
            </p>
            <p className={styles.headerDescription}>
              If you have plans for studying Creative Arts and Designs in Australia, you should pat yourself on your back for you've chosen the right country. Australia appreciates art more than any other country does.
            </p>
          </div>
          
         
        
        </div>
      </section>

      {/* Courses Section */}
      <section className={styles.coursesSection}>
        <div className={styles.coursesContent}>
          <h2 className={styles.coursesTitle}>Courses available for Creative Arts and Design in Australia</h2>
          
          {/* Diploma Section */}
          <div className={styles.courseCard}>
            <h3 className={styles.courseCardTitle}>1.Diploma of Art and Design</h3>
            
            <div className={styles.courseDetails}>
              <div className={styles.detailItem}>
                <h4 className={styles.detailLabel}>Course Duration</h4>
                <p className={styles.detailText}>
                  Course duration for Diploma in Creative Arts and Design in Australia is normally 2 years
                </p>
              </div>

              <div className={styles.detailItem}>
                <h4 className={styles.detailLabel}>Requirements</h4>
                <ul className={styles.requirementsList}>
                  <li className={styles.requirementItem}>Australian year 12 or equivalent</li>
                  <li className={styles.requirementItem}>English requirements</li>
                  <li className={styles.subRequirement}>IELTS: 5.5 (no band lower than 5.0)</li>
                  <li className={styles.subRequirement}>TOEFL(paper): 471, TWE 4</li>
                  <li className={styles.subRequirement}>TOEFL(online): 52 - Writing 15, Speaking 14, Listening and Reading 5</li>
                  <li className={styles.subRequirement}>PTE: 42 (no band lower than 36)</li>
                </ul>
              </div>

              <div className={styles.detailItem}>
                <h4 className={styles.detailLabel}>Course fee</h4>
                <p className={styles.detailText}>
                  The approximate fee for this course is <span className={styles.highlightPrice}>A$22,900*</span> on average and depends on the location of the university and the course structure of the University / College.
                </p>
              </div>
            </div>
          </div>

          {/* Bachelor Section */}
          <div className={styles.courseCard}>
            <h3 className={styles.courseCardTitle}>2.Bachelor of Arts and bachelor of advanced studies</h3>
            
            <div className={styles.courseDetails}>
              <div className={styles.detailItem}>
                <h4 className={styles.detailLabel}>Course Duration</h4>
                <p className={styles.detailText}>
                  Course duration for Bachelors in Creative Arts and Design in Australia is normally 4 years
                </p>
              </div>

              <div className={styles.detailItem}>
                <h4 className={styles.detailLabel}>Cost</h4>
                <p className={styles.detailText}>
                  The average cost for Bachelor of Arts and Bachelor of Advanced Studies is <span className={styles.highlightPrice}>AUD $23,000</span>.
                </p>
              </div>

              <div className={styles.detailItem}>
                <h4 className={styles.detailLabel}>Entry Requirements</h4>
                <ul className={styles.requirementsList}>
                  <li className={styles.requirementItem}>
                    A secondary education qualification (including national and international equivalents), or approved higher education study, including approved preparation courses.
                  </li>
                  <li className={styles.requirementItem}>
                    <span className={styles.testName}>TOEFL</span> - IBT score: A minimum result of 78 overall including a minimum result of 12 in Reading, 11 in Listening, 17 in Speaking and 20 in Writing.
                  </li>
                  <li className={styles.requirementItem}>
                    <span className={styles.testName}>IELTS</span> score: A minimum result of 6.5 overall and a minimum result of 6.0 in each band
                  </li>
                </ul>
              </div>

              <div className={styles.detailItem}>
                <h4 className={styles.detailLabel}>Salary</h4>
                <p className={styles.detailText}>
                  The average salary for Bachelors in Creative Art and Design is <span className={styles.highlightPrice}>$51k</span>.
                </p>
              </div>

              <div className={styles.detailItem}>
                <h4 className={styles.detailLabel}>Scope</h4>
                <p className={styles.detailText}>
                  Graphic designer, Photographer, Video Editor, Designer, Architect
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

export default Arts;