import React from 'react';
import styles from './Science.module.css';

const Science = () => {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.mainTitle}>Study Applied and Pure Science in Australia</h1>
            <p className={styles.heroDescription}>
              Applied and Pure Sciences are now being globally on-demand, recognized and accepted. This is the age where scientists like Neil DeGrasse Tyson, Carl Sagan, etc. are popular. Pure science is no more a geek thing to study or something that would make you less cool. With the added popularity comes added benefits. If you have a passion for science and have an applied and pure science degree, you can apply for big government funded or private organization and work as a research professional scientist.
            </p>
          </div>
         
             
        </div>
      </section>

      <div className={styles.sectionRow}>
  {/* Why Study Section */}
  <section className={styles.whyStudySection}>
    <div className={styles.contentWrapper}>
      <h2 className={styles.sectionTitle}>Why study applied and pure science in Australia?</h2>
      <ul className={styles.benefitsList}>
        <li className={styles.benefitItem}>Applied and Pure Sciences are offered by most of the colleges (if not all) in Australia</li>
        <li className={styles.benefitItem}>Giant career opportunities for the future</li>
        <li className={styles.benefitItem}>Fees structure Cheaper compared to other courses</li>
        <li className={styles.benefitItem}>High quality of education and growing future demand after studies.</li>
        <li className={styles.benefitItem}>Huge demand for pure science graduate</li>
      </ul>
    </div>
  </section>

  {/* Courses Available Section */}
  <section className={styles.coursesSection}>
    <div className={styles.contentWrapper}>
      <h2 className={styles.sectionTitle}>Courses available</h2>
      <p className={styles.coursesDescription}>
        The course available for Applied Sciences in Australia are:
      </p>
      <ul className={styles.coursesList}>
        <li className={styles.courseItem}>Bachelors of Applied Science</li>
        <li className={styles.courseItem}>Master of Applied Science</li>
      </ul>
    </div>
  </section>
</div>

     {/* Areas of Study Section */}
<section className={styles.areasSection}>
  <div className={styles.contentWrapper}>
    <h2 className={styles.sectionTitle + ' ' + styles.centerText}>Area of study</h2>
    
    <div className={styles.areasGrid}>
      <div className={styles.areaColumn}>
        <ul className={styles.areasList}>
          <li className={styles.areaItem}>Biochemistry</li>
          <li className={styles.areaItem}>Botany</li>
          <li className={styles.areaItem}>Chemistry</li>
          <li className={styles.areaItem}>Computer science and computer engineering</li>
          <li className={styles.areaItem}>Electronics</li>
          <li className={styles.areaItem}>Environmental management and ecology (albury-wodonga only)</li>
          <li className={styles.areaItem}>Environmental science</li>
          <li className={styles.areaItem}>Genetics</li>
        </ul>
      </div>
      <div className={styles.areaColumn}>
        <ul className={styles.areasList}>
          <li className={styles.areaItem}>Mathematics</li>
          <li className={styles.areaItem}>Microbiology</li>
          <li className={styles.areaItem}>Physics</li>
          <li className={styles.areaItem}>Psychology</li>
          <li className={styles.areaItem}>Statistical science and zoology and many more</li>
        </ul>
      </div>
    </div>
  </div>
</section>


      

      
     
    </div>
    </div>
  );
};

export default Science;