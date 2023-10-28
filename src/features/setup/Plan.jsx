import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
  ExerciseType,
  bgColorByType,
  formatTime,
  generateHIIT,
  paddingByType,
} from '../../utils/scripts';
import Button from '../../ui/Button';
import List from '../../ui/List';
import Heading from '../../ui/Heading';
import Header from './ui/Header';
import Layout from '../../ui/Layout';

export default function Plan() {
  const { minutes, interval } = useParams();
  const navigate = useNavigate();

  const hiitPlan = generateHIIT(minutes, interval);

  const handleStartWorkout = () => {
    // Start workout
    navigate(`/start-workout/${minutes}`);
  };

  return (
    <Layout>
      <Header />
      <div className="p-8">
        <Heading level="h2" customClass="mb-4">
          We created a {minutes} minute HIIT workout for you:
        </Heading>
        {/* Using Render Prop Pattern for List */}
        <List
          customClass="cursor-default"
          items={hiitPlan}
          render={(exercise) => (
            <li
              key={uuidv4()}
              className={`text-center rounded-md pt-4 my-1 ${paddingByType(
                exercise.type,
              )} ${bgColorByType(exercise.type, false)}`}
            >
              {exercise.type === ExerciseType.FINISHED
                ? exercise.type
                : `${formatTime(exercise.duration)} ${exercise.type}`}
            </li>
          )}
        />

        <Button customClass="mt-3" fn={handleStartWorkout}>
          Start Workout
        </Button>
      </div>
    </Layout>
  );
}
