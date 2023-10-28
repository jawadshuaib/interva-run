import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { generateHIIT, remainingSprints } from '../../utils/scripts';
import CurrentInterval from './CurrentInterval';

function Intervals() {
  const navigate = useNavigate();
  const { minutes } = useParams();

  // Check if minutes is a number
  // If not, redirect to the dashboard
  useEffect(() => {
    if (isNaN(minutes)) {
      // Redirect to dashboard
      navigate('/dashboard');
      return;
    }
  }, [minutes]);

  const workout = generateHIIT(isNaN(minutes) ? 0 : minutes);

  const [currentIntervalIndex, setCurrentIntervalIndex] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(workout[0].duration);

  const sprintsRemaining = remainingSprints(workout, currentIntervalIndex);

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
        // type="sprint"
        // duration={10}
        type={workout[currentIntervalIndex].type}
        duration={secondsRemaining}
        sprintsRemaining={sprintsRemaining}
      />
    </div>
  );
}

export default Intervals;
