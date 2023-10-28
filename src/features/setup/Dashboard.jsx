import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocalStorageValue } from '../../utils/scripts';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import Heading from '../../ui/Heading';
import Header from './Header';
import Layout from '../../ui/Layout';
import Explanation from './Explanation';

export default function Dashboard() {
  const preset = {
    minutes: '13',
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
    minutes !== preset.minutes
      ? localStorage.setItem('minutes', minutes)
      : localStorage.removeItem('minutes');
    interval !== preset.interval
      ? localStorage.setItem('interval', interval)
      : localStorage.removeItem('interval');

    // Navigate to the workout plan
    minutes > 0 &&
      interval > 0 &&
      navigate(`/workout-plan/${minutes}/${interval}`);
  };

  return (
    <Layout>
      <Header />
      <Explanation>
        <p className="text-xl text-slate-700 px-4 pt-4 text-left">
          High intensity interval training markedly improves both aerobic and
          anaerobic fitness. The following workout is based on the{' '}
          <a
            className="text-blue-700 hover:underline hover:text-blue-800"
            href="https://jps.biomedcentral.com/articles/10.1007/s12576-019-00676-7"
            target="_blank"
            rel="noreferrer"
          >
            Tabata protocol
          </a>
          .
        </p>
      </Explanation>
      <div className="px-8 pb-8">
        <Heading>How many minutes do you want to workout?</Heading>

        <Input
          type="number"
          placeholder="Enter minutes..."
          value={minutes}
          fnChange={(e) => setMinutes(e.target.value)}
          fnKeyDown={(e) => e.key === 'Enter' && handleCreateWorkoutPlan()}
        />
        <Heading customClass="mt-2">How many seconds per interval?</Heading>
        <Input
          type="number"
          placeholder="Enter seconds..."
          value={interval}
          fnChange={(e) => setInterval(e.target.value)}
          fnKeyDown={(e) => e.key === 'Enter' && handleCreateWorkoutPlan()}
        />
        <Button fn={handleCreateWorkoutPlan}>Create Workout Plan</Button>
      </div>
    </Layout>
  );
}
