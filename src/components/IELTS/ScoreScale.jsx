import React from 'react'
import styles from './ScoreScale.module.css';

const ScoreScale = () => {
    const scores = [
    { band: 9, level: 'Expert user' },
    { band: 8, level: 'Very good user' },
    { band: 7, level: 'Good user' },
    { band: 6, level: 'Competent user' },
    { band: 5, level: 'Modest user' },
    { band: 4, level: 'Limited user' },
    { band: 3, level: 'Extremely limited user' },
    { band: 2, level: 'Intermittent user' },
    { band: 1, level: 'Non-user' },
    { band: 0, level: 'Did not attempt the test' },
  ];



  return (
   <>
  <div className={styles.scoreWrapper}>
    <div className={styles.scorewrap}>
        <div className={styles.text}>
            <h3>IELTS Score Scale:</h3>
        </div>
  
  <div className={styles.tableContainer}>
    <table className={styles.scoreTable}>
      <thead>
        <tr>
          <th>Band Score</th>
          <th>Level of Proficiency</th>
        </tr>
      </thead>
      <tbody>
        {scores.map((item) => (
          <tr key={item.band}>
            <td>{item.band}</td>
            <td>{item.level}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </div>
</div>

   </>
  )
}

export default ScoreScale