import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { generateHIIT } from './workout-scripts';

export default function Plan() {
  const { minutes } = useParams();
  const navigate = useNavigate();
  const hiitPlan = generateHIIT(minutes);

  function handleStartWorkout() {
    // Start workout
    navigate(`/start-workout/${minutes}`);
  }

  return (
    <div>
      <h2>We created the following workout for {minutes} minutes:</h2>
      <ol>
        {hiitPlan.map((exercise) => (
          <li key={uuidv4()}>{exercise.type}</li>
        ))}
      </ol>
      <button type="button" onClick={handleStartWorkout}>
        Start Workout
      </button>
    </div>
  );
}
