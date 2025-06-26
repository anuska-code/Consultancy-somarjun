import React from 'react';
import { HiOutlineHand } from 'react-icons/hi';
import { FaRegComments } from 'react-icons/fa';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.homepageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
          <div className={styles.centeredHeroText}>
        <div className={styles.heroText}>
          <h1>
            The best consultancy
            <br />
            Ensures your overseas success
          </h1>
          <p >
            We are dedicated to providing the best information and innovative
            services as a leading Study Abroad Consultancy in Nepal. Our
            mission is to ensure students success, excellent career prospects,
            and a bright future.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.contactBtn}>Contact Us</button>
            <button className={styles.applyBtn}>Apply Now</button>
          </div>
        </div>
        </div>
        <div className={styles.heroImage}>
          <img
            src="images\hero-image.png"
            alt="World Monuments"
          />
        </div>
      </section>

     
     
<div className={styles.supporttext}>
  We are here to help you out at the best
</div>


      {/* Footer Help Chat */}
      <div className={styles.chatWidget}>
        <div className={styles.chatMessage}>
           <HiOutlineHand style={{ marginRight: '6px' }} /> Hi! How can we help?
        </div>
        <button className={styles.chatButton}>I have a question</button>
        <button className={styles.chatButton}>Tell me more</button>
        <div className={styles.chatIconWrapper}>
          <div className={styles.chatIcon}>    <FaRegComments /></div>
          <div className={styles.chatNotification}>1</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
