import React from 'react';
import styles from './StudyUSA.module.css';

const StudyUSA = () => {
  return (
    <>
    <div className={styles.mainWrapper}>
      <div className={styles.headerSection}>
      <div className={styles.contentSection}>
        <div className={styles.textDiv}>
          <h1>Reasons to study in USA</h1>
          <div className={styles.partWrapper}>
            <h2>1. World’s Top Universities</h2>
            <p>The USA has one of the top-ranked universities in the world. Over 4,000 schools and universities are located in the United States. In the United States, you can find outstanding undergraduate and graduate programs. For their excellence, US degrees are recognized and accepted all around the world.</p>
          </div>
          <div className={styles.partWrapper}>
            <h2>2. Career Opportunities</h2>
            <p>The United States has the world’s largest economy. When it comes to dividing the world’s top 100 companies, the United States still has the largest share. A degree from a US institution opens up a wide range of job opportunities, and a degree from a well-known university boosts the chances even more.</p>
          </div>
          <div className={styles.partWrapper}>
            <h2>3. Job Opportunities</h2>
            <p>When it comes to providing opportunities for excellent and well-paying jobs, the United States is one of the world’s leaders[](http://tradingeconomics.com/united-states/job-offers). Additionally, the US government provides a lot of assistance to students who want to continue their education to graduate with a good career.</p>
          </div>
          <div className={styles.partWrapper}>
            <h2>4. Travel Opportunities</h2>
            <p>With so many cities and states in the United States, it’s easy to get lost and wind up doing a variety of activities. Rather than sticking in one city or region, it is always a good idea to travel to new areas, meet new people, and learn about different cultures. Some wonderful destinations to visit are New York City, Chicago, Los Angeles, San Francisco, Washington, D.C., Las Vegas, Miami, and many more.</p>
          </div>
          <div className={styles.partWrapper}>
            <h2>5. Excellent Support for International Students</h2>
            <p>Institutions assist international students living in a foreign country. They conduct webinars, workshops, open days, orientation programs, and training, among other things. These institutes also offer language seminars to help international students integrate into their new culture.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default StudyUSA;