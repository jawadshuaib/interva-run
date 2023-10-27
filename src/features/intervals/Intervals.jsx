import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import CurrentInterval from './CurrentInterval';
import { useParams } from 'react-router-dom';
import { generateHIIT } from '../workout/workout-scripts';

function Intervals() {
  const { minutes } = useParams();
  const workout = generateHIIT(minutes);

  const [currentIntervalIndex, setCurrentIntervalIndex] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(workout[0].duration);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining((prevSeconds) => prevSeconds - 1);
      } else {
        // Move to the next interval
        if (currentIntervalIndex < workout.length - 1) {
          setCurrentIntervalIndex((prevIndex) => prevIndex + 1);
          setSecondsRemaining(workout[currentIntervalIndex + 1].duration);
        } else {
          // If we're at the last interval, stop the timer
          clearInterval(intervalId);
        }
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIntervalIndex, secondsRemaining, workout]);

  return (
    <div>
      <CurrentInterval
        type={workout[currentIntervalIndex].type}
        duration={secondsRemaining}
      />
    </div>
  );
}

export default Intervals;
