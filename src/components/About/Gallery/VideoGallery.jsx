import React from 'react';
import styles from './VideoGallery.module.css';



const VideoGallery = () => {
  const videoList = [
    {
      title: 'Mountain View',
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
      title: 'Nature Scene',
      src: 'https://www.w3schools.com/html/movie.mp4',
    },
    {
      title: 'Demo Clip',
      src: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
    },
  ];

  return (
    <div className={styles.galleryContainer}>
      <h2 className={styles.heading}>Video Gallery</h2>
      <div className={styles.videoGrid}>
        {videoList.map((video, index) => (
          <div key={index} className={styles.videoCard}>
            <h3 className={styles.videoTitle}>{video.title}</h3>
            <video className={styles.videoPlayer} controls>
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
