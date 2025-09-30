import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useMusic } from '@/context/MusicContext';
import styles from './MusicControlPopup.module.css';

export default function MusicControlPopup({ show, onHide }) {
  const { 
    isPlaying, 
    currentTrack, 
    volume, 
    togglePlayPause, 
    playNextTrack, 
    playPreviousTrack,
    handleVolumeChange,
    musicEnabled 
  } = useMusic();

  if (!musicEnabled) return null;

  return (
    <Modal 
      show={show} 
      onHide={onHide}
      centered
      className={styles.musicModal}
      size="sm"
    >
      <Modal.Header closeButton className={styles.modalHeader}>
        <Modal.Title className={styles.modalTitle}>Music Player</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        {/* Track Name */}
        <div className={styles.trackInfo}>
          <div className={styles.trackIcon}>🎵</div>
          <div className={styles.trackName}>{currentTrack.name}</div>
        </div>

        {/* Volume Control */}
        <div className={styles.volumeControl}>
          <span className={styles.volumeIcon}>🔊</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
            className={styles.volumeSlider}
          />
          <span className={styles.volumeValue}>{Math.round(volume * 100)}%</span>
        </div>

        {/* Control Buttons */}
        <div className={styles.controls}>
          <Button 
            variant="outline-primary" 
            className={styles.controlBtn}
            onClick={playPreviousTrack}
          >
            ⏮️
          </Button>
          <Button 
            variant="primary" 
            className={styles.playBtn}
            onClick={togglePlayPause}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </Button>
          <Button 
            variant="outline-primary" 
            className={styles.controlBtn}
            onClick={playNextTrack}
          >
            ⏭️
          </Button>
        </div>

        {/* Close Button */}
        <div className={styles.closeButtonContainer}>
          <Button 
            variant="outline-danger" 
            className={styles.closeBtn}
            onClick={onHide}
          >
            ✕ Close
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}