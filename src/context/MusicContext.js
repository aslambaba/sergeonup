// src/context/MusicContext.js

import React, { createContext, useState, useContext, useEffect, useRef } from 'react';

const MusicContext = createContext();

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};

export const MusicProvider = ({ children }) => {
  // Apne music tracks yahan add karein
  const tracks = [
    { id: 1, name: 'Mirror in Mirror', url: '/music/music1.mp3' },
    { id: 2, name: 'Erik Satie Gymnopedie No3', url: '/music/music2.mp3' },
    { id: 3, name: 'Erik Satie Gymnopedie No1', url: '/music/music3.mp3' },
    { id: 4, name: 'Erik Satie Gymnopedie No2', url: '/music/music4.mp3' },
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false); // Player popup ke liye state
  const audioRef = useRef(null);

  // Load hone par localStorage check karein
  useEffect(() => {
    const hasSeen = localStorage.getItem('hasSeenMusicPopup');
    if (!hasSeen) {
      setShowWelcomePopup(true);
    } else {
      const preference = localStorage.getItem('musicPreference');
      if (preference === 'enabled') {
        setMusicEnabled(true);
        setIsPlaying(true);
        const randomIndex = Math.floor(Math.random() * tracks.length);
        setCurrentTrackIndex(randomIndex);
      }
    }
  }, []);

  // Audio element initialize karein
  useEffect(() => {
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio();
      audioRef.current.volume = volume;
      audioRef.current.addEventListener('ended', playNextTrack);
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('ended', playNextTrack);
          audioRef.current.pause();
        }
      };
    }
  }, []);

  // Track change hone par audio source update karein
  useEffect(() => {
    if (audioRef.current && musicEnabled) {
      audioRef.current.src = tracks[currentTrackIndex].url;
      if (isPlaying) {
        audioRef.current.play().catch(err => console.log('Audio play error:', err));
      }
    }
  }, [currentTrackIndex, musicEnabled]);
  
  // Volume update karein
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Agla track play karein
  const playNextTrack = () => {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * tracks.length);
    } while (nextIndex === currentTrackIndex && tracks.length > 1);
    setCurrentTrackIndex(nextIndex);
  };

  // Pichla track play karein
  const playPreviousTrack = () => {
    let prevIndex;
    do {
      prevIndex = Math.floor(Math.random() * tracks.length);
    } while (prevIndex === currentTrackIndex && tracks.length > 1);
    setCurrentTrackIndex(prevIndex);
  };
  
  // Play/Pause toggle karein
  const togglePlayPause = () => {
    if (!audioRef.current || !musicEnabled) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(err => console.log('Audio play error:', err));
      setIsPlaying(true);
    }
  };
  
  // Volume change handle karein
  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
  };

  // Music enable karein
  const enableMusic = () => {
    localStorage.setItem('hasSeenMusicPopup', 'true');
    localStorage.setItem('musicPreference', 'enabled');
    setMusicEnabled(true);
    setShowWelcomePopup(false);
    setIsPlaying(true);
    const randomIndex = Math.floor(Math.random() * tracks.length);
    setCurrentTrackIndex(randomIndex);
  };
  
  // Music disable karein
  const disableMusic = () => {
    localStorage.setItem('hasSeenMusicPopup', 'true');
    localStorage.setItem('musicPreference', 'disabled');
    setMusicEnabled(false);
    setShowWelcomePopup(false);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };
  
  // Welcome popup dobara dikhayein
  const askForMusicPreference = () => {
    setShowWelcomePopup(true);
  };

  const value = {
    isPlaying,
    currentTrack: tracks[currentTrackIndex],
    volume,
    showWelcomePopup,
    musicEnabled,
    tracks,
    showPlayer,
    setShowPlayer,
    togglePlayPause,
    playNextTrack,
    playPreviousTrack,
    handleVolumeChange,
    enableMusic,
    disableMusic,
    askForMusicPreference,
  };

  return (
    <MusicContext.Provider value={value}>
      {children}
    </MusicContext.Provider>
  );
};