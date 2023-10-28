import { useState } from 'react';

export const useConfetti = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const celebrate = () => {
    setShowConfetti(true);
    setFadeOut(false);

    setTimeout(() => {
      setFadeOut(true);
    }, 3000); // Start fading out after 3 seconds

    setTimeout(() => {
      setShowConfetti(false);
    }, 5000); // Hide confetti after 5 seconds
  };

  return { showConfetti, fadeOut, celebrate };
};
