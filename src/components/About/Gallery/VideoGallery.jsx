import React from 'react';
import { motion } from 'framer-motion';
import styles from './VideoGallery.module.css';
import videoList from './videodata.json';

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const VideoGallery = () => {
  return (
    <div className={styles.videowrapper}>
      <div className={styles.container}>
        <div className={styles.galleryContainer}>
          <h2 className={styles.heading}>Video Gallery</h2>

          <motion.div
            className={styles.videoGrid}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {videoList.map((video, index) => (
              <motion.div
                key={index}
                className={styles.videoCard}
                variants={cardVariants}
              >
                <video className={styles.videoPlayer} controls>
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <h3 className={styles.videoTitle}>{video.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
