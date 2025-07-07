import React from 'react';
import styles from './StudyUK.module.css';

const StudyUK = () => {
  return (
    <div className={styles.studyUKWrapper}>
      <div className={styles.studyUKSection}>
        <div className={styles.herotext}>
        <h2 className={styles.heading}>Why Study in UK from Nepal?</h2>
</div>
        <div className={styles.studyUKContent}>
          <div className={styles.textSection}>
            <p className={styles.paragraph}>
              The United Kingdom is renowned for its quality of education. Many universities established in the 12th century have become leaders in the education world. Study in UK, providing quality education and pioneered the education culture.
            </p>
            <p className={styles.paragraph}>
              If you intend to study in the UK, you are up for a unique experience. Whether it is the hustle and bustle of London you are looking for or the charming countryside of West England, you will fall in love with the UK and its people.
            </p>
            <p className={styles.paragraph}>
              With the long history of education culture, there is no wonder that it has one of the biggest international student populations in the world.
            </p>
            <p className={styles.paragraph}>
              Whatever your interests, there’s a huge range of clubs and societies, as well as a diverse social life on offer.
            </p>
            <ul className={styles.list}>
              <li>Plenty of course choices: Choose from over 50,000 courses, in more than 25 subject areas.</li>
              <li>UK courses are generally shorter than other countries, helping to reduce overall tuition fees and accommodation costs.</li>
              <li>It can be possible to work while you study too.</li>
            </ul>
           
          </div>

          <div className={styles.imageSection}>
            <img
              src="/images/uk.png" 
              alt="UK University"
              className={styles.ukImage}
            />
          </div>
        </div>
         <div className={styles.footertext}>
            <p className={styles.note}>
              Stick around till the end to find out everything you need to know as a Nepali student planning for higher education in the UK.
            </p>
            </div>
      </div>
    </div>
  );
};

export default StudyUK;
