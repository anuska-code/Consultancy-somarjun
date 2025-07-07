import React from 'react';
import styles from './SkillsTested.module.css';
import { motion } from 'framer-motion';

const SkillsTested = () => {
  return (
    <motion.div
      className={styles.skillsWrapper}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.3 }}
      variants={{
        hidden: {},
        visible: {},
      }}
    >
      <div className={styles.skillswrap}>
        {[...Array(4)].map((_, index) => (
          <motion.div
            key={index}
            className={styles.skillColumn}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Render original content manually because we are not changing content */}
            {index === 0 && (
              <>
                <h3>What skills are tested in Listening?</h3>
                <ul>
                  <li>Locating and understanding specific information</li>
                  <li>Recognizing the writer's opinions and attitudes</li>
                  <li>Understanding the logical structure of a text</li>
                </ul>
              </>
            )}
            {index === 1 && (
              <>
                <h3>What skills are tested in Reading?</h3>
                <ul>
                  <li>Locating and understanding specific information</li>
                  <li>Recognizing the writer's opinions and attitudes</li>
                  <li>Understanding the logical structure of a text</li>
                </ul>
              </>
            )}
            {index === 2 && (
              <>
                <h3>What skills are tested in Writing?</h3>
                <ul>
                  <li>Describing, summarizing, or explaining visual information (graphs, charts, and diagrams)</li>
                  <li>Presenting a written argument or opinion on a given topic</li>
                </ul>
              </>
            )}
            {index === 3 && (
              <>
                <h3>What skills are tested in Speaking?</h3>
                <ul>
                  <li>Fluency and coherence</li>
                  <li>Lexical resource (vocabulary usage)</li>
                  <li>Grammatical range and accuracy</li>
                  <li>Pronunciation</li>
                </ul>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsTested;
