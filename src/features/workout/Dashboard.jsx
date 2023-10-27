import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [minutes, setMinutes] = React.useState(0);

  function handleCreateWorkoutPlan() {
    minutes > 0 && navigate(`/workout-plan/${minutes}`);
  }
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-800">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl mb-4">How long do you want to run?</h1>
        <input
          className="border p-2 w-full mb-4"
          type="number"
          placeholder="Enter minutes..."
          onChange={(e) => setMinutes(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleCreateWorkoutPlan()}
        />
        <button
          type="button"
          className="w-full bg-blue-500 text-white p-2 rounded"
          onClick={handleCreateWorkoutPlan}
        >
          Create Workout Plan
        </button>
      </div>
    </div>
  );
}
