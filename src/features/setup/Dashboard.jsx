import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import Heading from '../../ui/Heading';
import { getLocalStorageValue } from '../../utils/scripts';

export default function Dashboard() {
  const preset = {
    minutes: '10',
    interval: '30',
  };

  const navigate = useNavigate();
  // Total length of the workout in minutes
  // Get from local storage if it exists
  const [minutes, setMinutes] = React.useState(
    getLocalStorageValue('minutes')
      ? getLocalStorageValue('minutes')
      : preset.minutes,
  );
  // Length of each interval in seconds
  // Get from local storage if it exists
  const [interval, setInterval] = React.useState(
    getLocalStorageValue('interval')
      ? getLocalStorageValue('interval')
      : preset.interval,
  );

  const handleCreateWorkoutPlan = () => {
    // Set the minutes and interval in local storage
    // if they are different from the preset values
    console.log(minutes, localStorage.getItem('minutes'));
    minutes !== preset.minutes && localStorage.setItem('minutes', minutes);
    interval !== preset.interval && localStorage.setItem('interval', interval);

    // Navigate to the workout plan
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
