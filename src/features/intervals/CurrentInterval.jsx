import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ExerciseType, bgColorByType } from '../../utils/scripts';
import Button from '../../ui/Button';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';

export default function CurrentInterval({ type, duration, sprintsRemaining }) {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);
  const bgColor = bgColorByType(type);

  useEffect(() => {
    if (type === ExerciseType.FINISHED && duration === 0) {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 8000);
    }
  }, [type]);

  const handleFinishedWorkout = () => {
    navigate('/dashboard');
  };
  return (
    <div
      className={`w-144 md:w-192 mx-auto text-center capitalize dark:text-slate-400 `}
    >
      {showConfetti && <Confetti gravity={0.3} />}
      <div className={`p-10 rounded-lg shadow-xl ${bgColor}`}>
        <h2 className="text-7xl md:text-18xl font-bold text-white tracking-tighter">
          {type}
        </h2>
        <p className="text-6xl md:text-16xl mt-5 text-white opacity-80">
          {duration}
        </p>

        {type === ExerciseType.FINISHED && (
          <Button customClass="mt-3" fn={handleFinishedWorkout}>
            Done!
          </Button>
        )}
      </div>

      {sprintsRemaining > 0 && (
        <div className="text-2xl mt-3">
          Sprints remaining{' '}
          <span className="bg-yellow-300 p-1 rounded-sm dark:text-black">
            {sprintsRemaining}
          </span>
        </div>
      )}
    </div>
  );
}

CurrentInterval.propTypes = {
  type: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  sprintsRemaining: PropTypes.number.isRequired,
};
