import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [time, setTime] = useState(10);
  const [paused, setPaused] = useState(false);
  const [started, setStarted] = useState(false);

  const isPostAA = () => started && time === 0;

  const isPreAA = () => started && time > 0;

  useEffect(() => {
    if (isPreAA() && !paused) {
      const interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isPreAA, started, time]);

  const handleStart = () => {
    setStarted(true);
  };

  const reset = () => {
    setStarted(false);
    setTime(10);
  }

  const handlePause = () => {
    setPaused(prevPaused => !prevPaused);
  }

  return (
    <div className="timer">
      <div hidden={!isPreAA()} className="time">{time} seconds until Post Adverse Action</div>
      <div hidden={!isPostAA()} className="time">Adverse Action complete</div>
      <button hidden={isPreAA() || isPostAA()} className="start-button" onClick={handleStart}>
        Pre Adverse Action
      </button>
      <button hidden={!isPostAA()} onClick={reset} className="start-button">Reset</button>
      <button hidden={!isPreAA()} className={paused ? 'start-button' : 'pause-button'} onClick={handlePause}>
        {!paused ? 'Pause' : 'Resume'}
      </button>
    </div>
  );
}

export default Timer;
