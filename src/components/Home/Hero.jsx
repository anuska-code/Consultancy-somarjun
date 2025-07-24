import React from 'react';
import { HiOutlineHand } from 'react-icons/hi';
import { FaRegComments } from 'react-icons/fa';
import styles from './Hero.module.css';
import CardList from '../HeroCard/CardList'; // Adjust the path as necessary
import { motion } from 'framer-motion';
import TimeMain from '../Time/TimeMain';
import SliderMain from '../Slider/SliderMain';


const Hero = () => {
  return (<>

    <SliderMain/>
    <div className={styles.homepageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <motion.div
          className={styles.centeredHeroText}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.heroText}>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              The best consultancy
              <br />
              Ensures your overseas success
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              We are dedicated to providing the best information and innovative
              services as a leading Study Abroad Consultancy in Nepal. Our
              mission is to ensure students success, excellent career prospects,
              and a bright future.
            </motion.p>
            <motion.div
              className={styles.heroButtons}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <motion.button
                className={styles.contactBtn}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                Contact Us
              </motion.button>
              <motion.button
                className={styles.applyBtn}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                Apply Now
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img src="images/hero-image.png" alt="World Monuments" />
        </motion.div>
      </section>

      

      <CardList />
    
      <div className={styles.timeWidgetContainer}>
  
  <TimeMain />
</div>
  </div>
    </>
  );
};

export default Hero;
