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
  const [showPlayer, setShowPlayer] = useState(false);
  const audioRef = useRef(null);
  const hasInitialized = useRef(false); // Track if we've initialized once

  // Load hone par localStorage check karein - SIRF EK BAAR
  useEffect(() => {
    if (hasInitialized.current) return; // Agar pehle initialize ho chuka hai to skip karo
    hasInitialized.current = true;

    const hasSeen = localStorage.getItem('hasSeenMusicPopup');
    if (!hasSeen) {
      // Agar pehli baar hai to welcome popup dikhao
      setShowWelcomePopup(true);
    } else {
      const preference = localStorage.getItem('musicPreference');
      const wasPlaying = localStorage.getItem('musicWasPlaying');
      
      if (preference === 'enabled') {
        setMusicEnabled(true);
        // Sirf tab play karo agar user ne pehle play kiya tha
        if (wasPlaying === 'true') {
          setIsPlaying(true);
          const savedIndex = localStorage.getItem('currentTrackIndex');
          const randomIndex = savedIndex ? parseInt(savedIndex) : Math.floor(Math.random() * tracks.length);
          setCurrentTrackIndex(randomIndex);
        }
      }
    }
  }, []);

  // Audio element initialize karein
  useEffect(() => {
    if (typeof window !== 'undefined' && !audioRef.current) {
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

  // Playing state ko localStorage mein save karo
  useEffect(() => {
    if (hasInitialized.current) {
      localStorage.setItem('musicWasPlaying', isPlaying ? 'true' : 'false');
      localStorage.setItem('currentTrackIndex', currentTrackIndex.toString());
    }
  }, [isPlaying, currentTrackIndex]);

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

  // Music enable karein - Welcome popup se
  const enableMusic = () => {
    localStorage.setItem('hasSeenMusicPopup', 'true');
    localStorage.setItem('musicPreference', 'enabled');
    localStorage.setItem('musicWasPlaying', 'true');
    setMusicEnabled(true);
    setShowWelcomePopup(false);
    setIsPlaying(true);
    const randomIndex = Math.floor(Math.random() * tracks.length);
    setCurrentTrackIndex(randomIndex);
  };
  
  // Music disable karein - Welcome popup se
  const disableMusic = () => {
    localStorage.setItem('hasSeenMusicPopup', 'true');
    localStorage.setItem('musicPreference', 'disabled');
    localStorage.setItem('musicWasPlaying', 'false');
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