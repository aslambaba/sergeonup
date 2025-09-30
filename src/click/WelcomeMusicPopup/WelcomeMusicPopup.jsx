import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useMusic } from '@/context/MusicContext';
import styles from './WelcomeMusicPopup.module.css';

export default function WelcomeMusicPopup() {
  const { showWelcomePopup, enableMusic, disableMusic } = useMusic();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid SSR → renders only after hydration

  return (
    <Modal 
      show={showWelcomePopup} 
      centered
      backdrop="static"
      keyboard={false}
      className={styles.welcomeModal}
    >
      <Modal.Body className={styles.modalBody}>
        <div className={styles.welcomeContent}>
          <div className={styles.musicIcon}>🎵</div>
          <h2 className={styles.title}>Welcome!</h2>
          <p className={styles.message}>
            Would you like to enjoy background music while browsing?
          </p>
          <div className={styles.buttonGroup}>
            <Button 
              variant="success" 
              size="lg"
              className={styles.yesButton}
              onClick={enableMusic}
            >
              Yes, Play Music
            </Button>
            <Button 
              variant="outline-secondary" 
              size="lg"
              className={styles.noButton}
              onClick={disableMusic}
            >
              No, Thanks
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
