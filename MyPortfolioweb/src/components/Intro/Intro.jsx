import React, { useState, useEffect } from 'react';
import "./intro.css";
import "./Intro-responsive.css"
const Intro = () => {
  const [currentText, setCurrentText] = useState(''); // Holds the current displayed text
  const [loopIndex, setLoopIndex] = useState(0); // Tracks the current phrase
  const [charIndex, setCharIndex] = useState(0); // Tracks the character position within the phrase
  const phrases = ['I am a developer', 'I am a hacker', 'I am a designer'];
  const typingSpeed = 100; // Typing speed in ms
  const pauseTime = 500; // Short pause after a phrase is fully typed

  useEffect(() => {
    const type = () => {
      const currentPhrase = phrases[loopIndex % phrases.length];

      if (charIndex < currentPhrase.length) {
        // Typing logic
        setCurrentText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        // Move to the next phrase after a short pause
        setTimeout(() => {
          setCharIndex(0); // Reset character index for the next phrase
          setLoopIndex(loopIndex + 1); // Move to the next phrase
        }, pauseTime);
      }
    };

    const timeout = setTimeout(type, typingSpeed);
    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [charIndex, loopIndex, phrases]);

  return (
    <div className="intro-container" id='home'>
      <div className="image-container">
        <img src="Profile.jpeg" alt="Hania Amir" />
        <div className="typing-text">
          <span>{currentText}</span>
          <span className="cursor">|</span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
