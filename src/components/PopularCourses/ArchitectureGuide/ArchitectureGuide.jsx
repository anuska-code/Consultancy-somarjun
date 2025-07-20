import React from 'react';
import styles from './ArchitectureGuide.module.css';

const ArchitectureGuide = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.container}>
        {/* Header Section */}
        <section className={styles.headerSection}>
          <div className={styles.headerContent}>
            <h1 className={styles.headerTitle}>Study Architecture in Australia</h1>
          </div>
        </section>

        {/* Introduction Section */}
        <section className={styles.introSection}>
          <div className={styles.introTextWrapper}>
            <div className={styles.introText}>
              <p>
                Architecture is not a single field. It's a combination of multiple fields 
                such as art, culture, science and technology. Would you like to design 
                bridges, houses, skyscrapers? Do you have the drive to be an artist 
                and also have science and technology to back up your facts? If 
                you'd like to model, design, plan and build environments then this is 
                the right course for you. If you'd like to study Architecture and 
                Construction in Australia, this article will guide you through the 
                courses available, requirements and cost.
              </p>

              <p>
                Architects are skilled professionals at the center of Australia's built 
                environment industry, a $100 billion sector employing over a million 
                people. Nepal is a developing country, and the way construction 
                rates are going high, Nepal will soon hit shortage of skilled 
                manpower. So, studying architecture and construction can be a 
                good thing to do
              </p>
            </div>
          </div>

          <div className={styles.introImageWrapper}>
            <div className={styles.guideLabel}>
              <div className={styles.guideLabelHeader}>THE NEXT</div>
              <div className={styles.guideLabelTitle}>STUDY ARCHITECTURE AND CONSTRUCTION IN AUSTRALIA</div>
              <div className={styles.guideLabelSubtext}>FREE GUIDE</div>
            </div>
            <img 
              src="/images/artictecture.webp" 
              alt="Study Architecture Guide" 
              className={styles.introImage}
            />
          </div>
        </section>

        {/* Universities Ranking Section */}
        <section className={styles.universitiesSection}>
          <div className={styles.universitiesContent}>
            <h2 className={styles.universitiesTitle}>Top Architecture Universities in Australia 2017/2018</h2>
            <div className={styles.universitiesText}>
              <p>
                The following is an Architecture university australia ranking list from{' '}
                <span className={styles.linkText}>University rankings</span>{' '}
                (<span className={styles.linkUrl}>http://www.universityrankings.com.au</span>):
              </p>
            </div>
            <div className={styles.universitiesList}>
              <ol className={styles.rankedList}>
                <li>University of Technology Sydney</li>
                <li>University of Tasmania</li>
                <li>Deakin University</li>
                <li>RMIT University</li>
                <li>Queensland University of Technology</li>
                <li>University of New South Wales</li>
                <li>Curtin University of Technology</li>
                <li>University of South Australia</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Courses Section */}
<section className={styles.coursesSection}>
  <div className={styles.coursesContent}>
    <h2 className={styles.coursesMainTitle}>Courses</h2>

    {/* Diploma Course Table */}
    <h3 className={styles.courseTitle}>Diploma of Building and Construction</h3>
    <table className={styles.courseTable}>
      <tbody>
        <tr>
          <th className={styles.tableHeading}>Course Duration</th>
          <td className={styles.tableData}>2 years</td>
        </tr>
        <tr>
          <th className={styles.tableHeading}>Course Fee</th>
          <td className={styles.tableData}>AUS 6,000* to AUS 18,000* per annum</td>
        </tr>
        <tr>
          <th className={styles.tableHeading}>Requirements</th>
          <td className={styles.tableData}>
            <ul className={styles.requirementsList}>
              <li>Year 12 Australia equivalent course</li>
              <li>IELTS = 6.0</li>
              <li>TOEFL = 60 - 78</li>
              <li>PTE = 50 - 58</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th className={styles.tableHeading}>Career Outcomes</th>
          <td className={styles.tableData}>
            <ul className={styles.careerList}>
              <li>Architectural and civil drafter or engineer</li>
              <li>Environmental designer</li>
              <li>Residential or commercial carpenter</li>
              <li>Construction worker</li>
              <li>Systems configuration manager</li>
              <li>Electrical design engineer</li>
              <li>Electrician</li>
              <li>HVAC/HVACR technician</li>
              <li>Building services technician</li>
              <li>Painter</li>
              <li>Sheet metal technician</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>

    {/* Bachelor Course Table */}
    <h3 className={styles.courseTitle}>Bachelor of Design in Architecture</h3>
    <table className={styles.courseTable}>
      <tbody>
        <tr>
          <th className={styles.tableHeading}>Course Duration</th>
          <td className={styles.tableData}>3 years</td>
        </tr>
        <tr>
          <th className={styles.tableHeading}>Cost</th>
          <td className={styles.tableData}>Average AUD $40,000</td>
        </tr>
        <tr>
          <th className={styles.tableHeading}>Entry Requirement</th>
          <td className={styles.tableData}>
            <ul className={styles.requirementsList}>
              <li>Australia year 12 or equivalent</li>
              <li>IELTS overall score of 6.5</li>
              <li>TOEFL = 565</li>
              <li>CAE = 58</li>
              <li>CPE = 45</li>
              <li>CAE and CPE = 176</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th className={styles.tableHeading}>Future Study Options</th>
          <td className={styles.tableData}>
            <ul className={styles.futureStudyList}>
              <li>Master of Architecture</li>
              <li>Bachelor of Design in Architecture (Honours)</li>
              <li>Master of Architectural Science (Sustainable Design)</li>
              <li>Master of Architectural Science (Illumination Design)</li>
              <li>Master of Architectural Science (Audio and Acoustics)</li>
              <li>Master of Architectural Science (Illumination Design) (High Performance Buildings)</li>
              <li>Master of Heritage Conservation</li>
              <li>Master of Urban and Regional Planning</li>
              <li>Master of Urban Design</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th className={styles.tableHeading}>Career Outcomes</th>
          <td className={styles.tableData}>
            <ul className={styles.careerList}>
              <li>Register Architect</li>
              <li>Architect</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

      </div>
    </div>
  );
};

export default ArchitectureGuide;
