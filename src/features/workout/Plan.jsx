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
    <div className="bg-white p-8 rounded shadow-md  dark:bg-slate-600">
      <h2 className="text-2xl mb-4 dark:text-slate-100">
        We created the following workout for {minutes} minutes:
      </h2>
      <ol className="text-xl dark:text-slate-300">
        {hiitPlan.map((exercise) => (
          <li key={uuidv4()}>
            {exercise.duration} seconds {exercise.type}
          </li>
        ))}
      </ol>
      <button
        type="button"
        className="w-full bg-blue-500 text-white p-2 rounded dark:bg-slate-800"
        onClick={handleStartWorkout}
      >
        Start Workout
      </button>
    </div>
  );
}
