import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from './Toggle.module.css';


const ScrollToggleButton = () => {
  const [scrollUp, setScrollUp] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    // Show button only after 100px scroll
    setIsVisible(scrollTop > 100);

    // If near bottom, show scroll-up; otherwise scroll-down
    setScrollUp(scrollTop + clientHeight >= scrollHeight - 200);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (scrollUp) {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to bottom
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  return isVisible ? (
    <div className={`${styles.scrollButtonContainer} ${styles.bottomPosition}`}>
      <button
        className={`${styles.scrollBtn} ${scrollUp ? styles.scrollBottomBtn : styles.scrollTopBtn}`}
        onClick={handleClick}
        aria-label={scrollUp ? "Scroll to Top" : "Scroll to Bottom"}
      >
        {scrollUp ? (
          <FaChevronDown className={styles.scrollIcon} />
        ) : (
          <FaChevronUp className={styles.scrollIcon} />
        )}
      </button>
    </div>
  ) : null;
};

export default ScrollToggleButton;
