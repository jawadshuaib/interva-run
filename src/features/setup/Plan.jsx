import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
  ExerciseType,
  bgColorByType,
  generateHIIT,
  paddingByType,
} from '../../utils/scripts';
import Button from '../../ui/Button';
import List from '../../ui/List';
import Heading from '../../ui/Heading';

export default function Plan() {
  const { minutes, interval } = useParams();
  const navigate = useNavigate();

  const hiitPlan = generateHIIT(minutes, interval);

  const handleStartWorkout = () => {
    // Start workout
    navigate(`/start-workout/${minutes}`);
  };

  return (
    <div className="bg-white p-8 rounded shadow-md  dark:bg-slate-600">
      <Heading level="h2" customClass="mb-4">
        We created the following workout for {minutes} minutes:
      </Heading>
      {/* Using Render Prop Pattern for List */}
      <List
        items={hiitPlan}
        render={(exercise) => (
          <li
            key={uuidv4()}
            className={`text-center rounded-md my-1 ${paddingByType(
              exercise.type,
            )} ${bgColorByType(exercise.type, false)}`}
          >
            {exercise.type === ExerciseType.FINISHED
              ? exercise.type
              : `${exercise.duration} seconds ${exercise.type}`}
          </li>
        )}
      />

      <Button customClass="mt-3" fn={handleStartWorkout}>
        Start Workout
      </Button>
    </div>
  );
}
