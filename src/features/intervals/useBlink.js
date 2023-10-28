import { useState, useEffect } from 'react';

export default function useBlink(duration = 2000) {
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsBlinking(false);
    }, duration);

    return () => clearTimeout(timerId);
  }, [duration]);

  return isBlinking;
}
