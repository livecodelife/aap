import React, { useState, useEffect } from 'react';
import './Timer.css';

function Timer() {
  const [time, setTime] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (isRunning && time > 0) {
      const interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setIsRunning(false);
    }
  }, [isRunning, time]);

  function handleStart() {
    setIsRunning(true);
    setStarted(true);
  }

  function handlePause() {
    setIsRunning(prevIsRunning => !prevIsRunning);
  }

  return (
    <div className="timer">
      <div className="time">{time}</div>
      <button hidden={started} className="start-button" onClick={handleStart}>
        Start
      </button>
      <button hidden={!started} className="pause-button" onClick={handlePause}>
        {isRunning ? 'Pause' : 'Resume'}
      </button>
    </div>
  );
}

export default Timer;
