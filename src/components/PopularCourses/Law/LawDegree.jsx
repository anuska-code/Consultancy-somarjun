import React from 'react';
import styles from './LawDegree.module.css';

const LawDegree = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.container}>

        <section className={styles.degreeSection}>
          <h2 className={styles.sectionTitle}>Why Study Law in Australia?</h2>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Global Recognition</h3>
              <p className={styles.cardText}>Australian law degrees are recognized worldwide, opening doors to international opportunities.</p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Interactive Learning</h3>
              <p className={styles.cardText}>Modern teaching techniques and moot courts give students hands-on experience.</p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Diverse Campuses</h3>
              <p className={styles.cardText}>Study in multicultural campuses with access to student support and legal resources.</p>
            </div>
          </div>
        </section>

        {/* LLB Details */}
        <section className={styles.degreeSection}>
          <h2 className={styles.sectionTitle}>Bachelor of Laws (LLB) Combined Degree</h2>
          <p className={styles.bodyText}>
            A combined law degree offers students the opportunity to study law with another discipline, providing broader career prospects.
          </p>

          {/* Side-by-side layout */}
          <div className={styles.flexRow}>
            <div className={styles.flexItem}>
              <h3 className={styles.subTitle}>Practical Legal Training (PLT)</h3>
              <p className={styles.bodyText}>
                PLT is essential to practice law in Australia. Some programs offering PLT include:
              </p>
              <ul className={styles.requirementList}>
                <li>Master of Laws (Legal Practice) (LLM)</li>
                <li>Graduate Diploma in Legal Practice</li>
              </ul>
            </div>

            <div className={styles.flexItem}>
              <h3 className={styles.subTitle}>Entry Requirements</h3>
              <ul className={styles.requirementList}>
                <li>Completion of secondary education (Year 12 or equivalent)</li>
                <li>English Language Proficiency:
                  <ul className={styles.nestedList}>
                    <li>IELTS: Overall 7.0 (W-7.0, others 6.5+)</li>
                    <li>TOEFL iBT: Overall 94 (W-26, others 23+)</li>
                    <li>PTE Academic: Overall 65</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <h3 className={styles.subTitle}>Top Universities</h3>
          <ol className={styles.universityList}>
            <li>University of Tasmania</li>
            <li>Deakin University</li>
            <li>University of Technology Sydney</li>
            <li>Australian Catholic University</li>
            <li>Charles Sturt University</li>
            <li>University of New England</li>
          </ol>
        </section>

        {/* Comparison Table */}
        <section className={styles.degreeSection}>
          <h2 className={styles.sectionTitle}>LLB vs LLM: Quick Comparison</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>LLB</th>
                  <th>LLM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Level</td>
                  <td>Undergraduate</td>
                  <td>Postgraduate</td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>3–5 years</td>
                  <td>1–2 years</td>
                </tr>
                <tr>
                  <td>Purpose</td>
                  <td>Qualify for legal practice</td>
                  <td>Specialize or advance career</td>
                </tr>
                <tr>
                  <td>Entry</td>
                  <td>Secondary Education + English</td>
                  <td>LLB or equivalent + Research</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* LLM Details */}
        <section className={styles.degreeSection}>
          <h2 className={styles.sectionTitle}>Master of Laws (LLM)</h2>

          <h3 className={styles.subTitle}>Entry Requirements</h3>
          <ul className={styles.requirementList}>
            <li>Australian Master's or Bachelor's with Honours (H1 or H2A) or international equivalent</li>
            <li>Research background and relevant academic performance</li>
            <li>English Proficiency:
              <ul className={styles.nestedList}>
                <li>IELTS: Overall 7.0 with no band less than 7.0</li>
                <li>TOEFL iBT: Overall 94</li>
                <li>PTE Academic: Overall 65</li>
              </ul>
            </li>
          </ul>

         
        </section>

      </div>
    </div>
  );
};

export default LawDegree;
