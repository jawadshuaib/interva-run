import { useState } from 'react';

// This hook will return a state "isBlinking" and a
// function "triggerBlink" to start the blinking effect
const useBlink = (timeoutDuration) => {
  const [isBlinking, setIsBlinking] = useState(false);

  const triggerBlink = () => {
    setIsBlinking(true);

    setTimeout(() => {
      setIsBlinking(false);
    }, timeoutDuration);
  };

  return [isBlinking, triggerBlink];
};

export default useBlink;
