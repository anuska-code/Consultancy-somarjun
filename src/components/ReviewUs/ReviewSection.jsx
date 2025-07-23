import React from 'react';
import styles from './ReviewSection.module.css';

const ReviewSection = () => {
  const handleGoogleReview = () => {
    window.open('https://www.google.com/search?q=google+reviews', '_blank');
  };

  const handleFacebookReview = () => {
    window.open('https://www.facebook.com/', '_blank');
  };

  return (
    <div className={styles.reviewSection}>
      <div className={styles.reviewContainer}>

        {/* Title Section */}
        <div className={styles.titleWrapper}>
          <h1 className={styles.titleText}>Review us</h1>
        </div>

        {/* Review Options Section */}
        <div className={styles.optionsWrapper}>
          <div className={styles.optionsContainer}>

            {/* Google Review Option */}
            <div className={styles.reviewOption}>
              <div className={styles.platformWrapper}>
                <div className={styles.platformText}>Review us on Google</div>
              </div>

              <div className={styles.qrWrapper}>
                <div className={styles.qrCodeContainer}>
                  <img
                    src="\images\qrscanner.png"
                    alt="Google QR Code"
                    className={styles.qrCodeImage}
                  />
                </div>
              </div>

              <div className={styles.scanWrapper}>
                <div className={styles.scanText}>Scan Me !!</div>
              </div>

              <div className={styles.buttonWrapper}>
                <button
                  className={styles.reviewButton}
                  onClick={handleGoogleReview}
                >
                  Click to review on Google
                </button>
              </div>
            </div>

            {/* Facebook Review Option */}
            <div className={styles.reviewOption}>
              <div className={styles.platformWrapper}>
                <div className={styles.platformText}>Review Us on Facebook</div>
              </div>

              <div className={styles.qrWrapper}>
                <div className={styles.qrCodeContainer}>
                    <img
                    src="\images\qrscanner.png"
                    alt="Google QR Code"
                    className={styles.qrCodeImage}
                  />
                </div>
              </div>

              <div className={styles.scanWrapper}>
                <div className={styles.scanText}>Scan Me !!</div>
              </div>

              <div className={styles.buttonWrapper}>
                <button
                  className={styles.reviewButton}
                  onClick={handleFacebookReview}
                >
                  Click to Review on Facebook
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
