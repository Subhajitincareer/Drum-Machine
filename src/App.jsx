import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [displayText, setDisplayText] = useState('');

  const drumPads = [
    {
      id: 'Heater-1',
      key: 'Q',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      id: 'Heater-2',
      key: 'W',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      id: 'Heater-3',
      key: 'E',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      id: 'Heater-4',
      key: 'A',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      id: 'Clap',
      key: 'S',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      id: 'Open-HH',
      key: 'D',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      id: 'Kick-n\'-Hat',
      key: 'Z',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      id: 'Kick',
      key: 'X',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      id: 'Closed-HH',
      key: 'C',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

  const handlePadTrigger = (padId, key) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
    setDisplayText(padId);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toUpperCase();
      const pad = drumPads.find(pad => pad.key === key);
      if (pad) handlePadTrigger(pad.id, pad.key);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div id="drum-machine">
      <div id="display">{displayText}</div>
      <div className="pads-container">
        {drumPads.map((pad) => (
          <div
            key={pad.id}
            className="drum-pad"
            id={pad.id}
            onClick={() => handlePadTrigger(pad.id, pad.key)}
          >
            {pad.key}
            <audio className="clip" id={pad.key} src={pad.url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
