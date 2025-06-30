import React from 'react';
import styles from './SkillsTested.module.css';

const SkillsTested = () => {
  return (
    <div className={styles.skillsWrapper}>
         <div className={styles.skillswrap}>
      <div className={styles.skillColumn}>
        <h3>What skills are tested in Listening?</h3>
        <ul>
          <li>Locating and understanding specific information</li>
          <li>Recognizing the writer's opinions and attitudes</li>
          <li>Understanding the logical structure of a text</li>
        </ul>
      </div>

      <div className={styles.skillColumn}>
        <h3>What skills are tested in Reading?</h3>
        <ul>
          <li>Locating and understanding specific information</li>
          <li>Recognizing the writer's opinions and attitudes</li>
          <li>Understanding the logical structure of a text</li>
        </ul>
      </div>

      <div className={styles.skillColumn}>
        <h3>What skills are tested in Writing?</h3>
        <ul>
          <li>Describing, summarizing, or explaining visual information (graphs, charts, and diagrams)</li>
          <li>Presenting a written argument or opinion on a given topic</li>
        </ul>
      </div>

      <div className={styles.skillColumn}>
        <h3>What skills are tested in Speaking?</h3>
        <ul>
          <li>Fluency and coherence</li>
          <li>Lexical resource (vocabulary usage)</li>
          <li>Grammatical range and accuracy</li>
          <li>Pronunciation</li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default SkillsTested;