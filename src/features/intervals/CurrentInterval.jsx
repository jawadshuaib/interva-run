import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Confetti from 'react-confetti';
import { useConfetti } from './useConfetti';
import useBlink from './useBlink';
import { ExerciseType, bgColorByType } from '../../utils/scripts';
import Button from '../../ui/Button';

export default function CurrentInterval({ type, duration, sprintsRemaining }) {
  const navigate = useNavigate();
  const { showConfetti, fadeOut, celebrate } = useConfetti();
  const [isBlinking, triggerBlink] = useBlink(1500);

  const bgColor = bgColorByType(type);

  // Blinking effect for sprints
  useEffect(() => {
    if (type === ExerciseType.SPRINT) {
      triggerBlink();
    }
  }, [type]);

  // Celebrate with confetti when the workout is finished
  useEffect(() => {
    if (type === ExerciseType.FINISHED && duration === 0) {
      celebrate();
    }
  }, [type]);

  const handleFinishedWorkout = () => {
    navigate('/dashboard');
  };
  return (
    <div
      className={`w-144 md:w-192 mx-auto text-center capitalize text-slate-400 `}
    >
      {showConfetti && (
        <Confetti gravity={0.3} className={fadeOut ? 'fade-out' : ''} />
      )}
      <div
        className={`p-10 pt-20 rounded-lg shadow-xl ${bgColor} ${
          isBlinking ? 'blinking' : ''
        }`}
      >
        <h2 className="text-7xl md:text-18xl font-bold text-white tracking-tighter">
          {type}
        </h2>
        {type !== ExerciseType.FINISHED && (
          <p className="text-6xl md:text-16xl mt-5 text-white opacity-80">
            {duration}
          </p>
        )}

        {type === ExerciseType.FINISHED && (
          <Button customClass="mt-10" fn={handleFinishedWorkout}>
            Done!
          </Button>
        )}
      </div>

      {sprintsRemaining > 0 && (
        <div className="flex items-center justify-center text-2xl  mt-3">
          Sprints remaining{' '}
          <span className="bg-yellow-300 ml-2 px-1 pt-1 rounded-lg  text-black">
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
