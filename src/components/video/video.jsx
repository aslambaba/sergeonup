import React from "react";
import styles from "./video.module.css";

export default function Video() {
  return (
    <div className={`${styles.videoContainer} my-4`}>
      <h3 className={styles.title}>At Surge-on Up we’re a cut above the rest.</h3>
      <div className={styles.videoWrapper}>
        <video 
          className={styles.video} 
          controls 
          muted 
          autoPlay={false}
        >
          <source src="/sampleVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
