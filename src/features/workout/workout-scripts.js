export function generateHIIT(minutes) {
  const totalSeconds = minutes * 60;
  const cooldownTimeBase = Math.round(totalSeconds * 0.1);
  let workoutTime =
    totalSeconds - generateWarmup(totalSeconds)[0].duration - cooldownTimeBase;

  const warmupSegments = generateWarmup(totalSeconds);
  const { segments: workoutSegments, remainingTime } =
    generateWorkout(workoutTime);
  const cooldownSegments = generateCooldown(cooldownTimeBase, remainingTime);

  return [...warmupSegments, ...workoutSegments, ...cooldownSegments];
}

// Helper function for generating the workout phase
function generateWorkout(workoutTime) {
  const segments = [];
  const sprintTime = Math.min(
    30,
    Math.round((2 * workoutTime) / (3 * Math.floor(workoutTime / 90))),
  );
  const walkTime = sprintTime / 2;

  const cycles = Math.floor(workoutTime / (sprintTime + walkTime));

  for (let i = 0; i < cycles; i++) {
    segments.push({
      type: 'sprint',
      duration: sprintTime,
    });
    workoutTime -= sprintTime;

    if (i === cycles - 1) break;

    if (workoutTime > walkTime) {
      segments.push({
        type: 'walk',
        duration: walkTime,
      });
      workoutTime -= walkTime;
    }
  }

  return { segments, remainingTime: workoutTime };
}

// Helper function for generating the warmup phase
function generateWarmup(totalSeconds) {
  const warmupTime = Math.round(totalSeconds * 0.2);
  return [
    {
      type: 'warmup',
      duration: warmupTime,
    },
  ];
}

// Helper function for generating the cooldown phase
function generateCooldown(baseCooldownTime, extraTime) {
  const totalCooldown = baseCooldownTime + extraTime;
  return [
    {
      type: 'cooldown',
      duration: totalCooldown,
    },
  ];
}

export function remainingSprints(hiit, currentIntervalIndex) {
  let count = 0;

  for (let i = currentIntervalIndex; i < hiit.length; i++) {
    if (hiit[i].type === 'sprint') {
      count++;
    }
  }

  return count;
}
