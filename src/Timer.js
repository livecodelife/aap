import React, { useState, useEffect } from 'react';

function Timer() {
  // Declare a new state variable, which we'll call "time" and set it to 10
  const [time, setTime] = useState(10);
  // Declare a new state variable, which we'll call "isRunning" and set it to false
  const [isRunning, setIsRunning] = useState(false);

  // This effect will run every time the "time" state variable is updated
  useEffect(() => {
    if (isRunning && time > 0) {
      // Set a timeout to decrement the "time" state variable every second
      const interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);

      // Return a cleanup function to stop the interval when the component unmounts
      return () => clearInterval(interval);
    } else {
      // Stop the timer when the time reaches 0 or the timer is paused
      setIsRunning(false);
    }
  }, [isRunning, time]); // This effect depends on the "isRunning" and "time" state variables

  // This function will start the timer
  function handleStart() {
    setIsRunning(true);
  }

  // This function will pause or resume the timer
  function handlePause() {
    setIsRunning(prevIsRunning => !prevIsRunning);
  }

  return (
    <div>
      <div>{time}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>
        {isRunning ? 'Pause' : 'Resume'}
      </button>
    </div>
  );
}

export default Timer;
