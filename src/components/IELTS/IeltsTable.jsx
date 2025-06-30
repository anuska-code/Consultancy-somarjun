import React from 'react'
import styles from './IeltsTable.module.css';

const IeltsTable = () => {
  return (
    <>
     <div className={styles.tableWrapper}>
        <div className={styles.tablewrap}>
        <div className={styles.Text}>
              <h3>IELTS Test Format in Detail:</h3>
        </div>
            <table className={styles.table}>
        <thead>
          <tr>
            <th>Test Section</th>
            <th>Time Allocation</th>
            <th>Total Number of Questions</th>
            <th>Item Types</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan="3">Listening</td>
            <td rowSpan="3">30 minutes</td>
            <td rowSpan="3">40 items</td>
            <td>Multiple Choice, Matching, Plan/Map/Diagram Labeling</td>
          </tr>
          <tr>
            <td>Form/Narrative/Note/Flowchart/Summary Completion</td>
          </tr>
          <tr>
            <td>Sentence Completion</td>
          </tr>
          <tr>
            <td rowSpan="5">Reading</td>
            <td rowSpan="5">60 minutes</td>
            <td rowSpan="5">40 items</td>
            <td>Multiple Choice, Matching, Plan/Map/Diagram Labeling</td>
          </tr>
          <tr>
            <td>Summary/Ideas/Information/Opinion Completion</td>
          </tr>
          <tr>
            <td>True/False/, Yes/No</td>
          </tr>
          <tr>
            <td>Sentence/Summary/Note/Table/Flowchart/Matching</td>
          </tr>
          <tr>
            <td>Diagram/Chart/Graph/Figure Classification</td>
          </tr>
          <tr>
            <td rowSpan="2">Writing</td>
            <td rowSpan="2">60 minutes</td>
            <td rowSpan="2">1 Task</td>
            <td>Task 1: Graph/Table/Chart/Diagram Description</td>
          </tr>
          <tr>
            <td>Task 2: Essay Writing</td>
          </tr>
          <tr>
            <td rowSpan="3">Speaking</td>
            <td rowSpan="3">11-15 minutes</td>
            <td rowSpan="3">1 Task</td>
            <td>Part 1: Introduction and Interview</td>
          </tr>
          <tr>
            <td>Part 2: Individual Long Turn (Cue card)</td>
          </tr>
          <tr>
            <td>Part 3: Two-way Discussion</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    </>
  )
}

export default IeltsTable;