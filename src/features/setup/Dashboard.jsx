import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import Heading from '../../ui/Heading';

export default function Dashboard() {
  const navigate = useNavigate();
  // Total length of the workout in minutes
  const [minutes, setMinutes] = React.useState(10);
  // Length of each interval in seconds
  const [interval, setInterval] = React.useState(30);

  const handleCreateWorkoutPlan = () => {
    minutes > 0 &&
      interval > 0 &&
      navigate(`/workout-plan/${minutes}/${interval}`);
  };
  return (
    <div className="bg-white p-8 rounded shadow-md  dark:bg-slate-600">
      <Heading customClass="mb-4">
        How many minutes do you want to workout?
      </Heading>

      <Input
        type="number"
        placeholder="Enter minutes..."
        value={minutes}
        fnChange={(e) => setMinutes(e.target.value)}
        fnKeyDown={(e) => e.key === 'Enter' && handleCreateWorkoutPlan()}
      />
      <Heading customClass="mb-4">How many seconds per interval?</Heading>
      <Input
        type="number"
        placeholder="Enter seconds..."
        value={interval}
        fnChange={(e) => setInterval(e.target.value)}
        fnKeyDown={(e) => e.key === 'Enter' && handleCreateWorkoutPlan()}
      />
      <Button fn={handleCreateWorkoutPlan}>Create Workout Plan</Button>
    </div>
  );
}
