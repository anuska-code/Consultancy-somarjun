import React from 'react';
import Card from './Card.jsx';
import data from '../HeroCard/data.json';
import styles from './Card.module.css';
import { motion } from 'framer-motion';

const CardList = () => {
  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    >
      <motion.div
        className={styles.header}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
      >
        <h2>Wherever you want to go, we'll get you there.</h2>
        <p>
          Explore the best study destinations in the world! Learn all about the
          countries' top universities, scholarships, cost of living, post-study
          work rights and more
        </p>
      </motion.div>

      <motion.div
        className={styles.cardListWrapper}
        variants={{
          hidden: {},
          visible: {},
        }}
      >
        {data.map((item) => {
          // Map title to route
          let to = "";
          if (item.title.includes("UK")) to = "study-abroad/uk";
          else if (item.title.includes("Canada")) to = "study-abroad/canada";
          else if (item.title.includes("Australia")) to = "/study-abroad/australia";
          else if (item.title.includes("New Zealand")) to = "/study-abroad/new-zealand";
          else if (item.title.includes("USA")) to = "/study-abroad/usa";
          else if (item.title.includes("Denmark")) to = "/study-abroad/denmark";
          return (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Card image={item.image} title={item.title} alt={item.alt} to={to} />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default CardList;
