export const ExerciseType = {
  WARMUP: 'warm up',
  SPRINT: 'sprint',
  WALK: 'walk',
  COOLDOWN: 'cool down',
  FINISHED: 'Finished',
};

export function generateHIIT(minutes = 12, interval = 30) {
  const totalSeconds = minutes * 60;
  const cooldownTimeBase = Math.round(totalSeconds * 0.1);
  let workoutTime =
    totalSeconds - generateWarmup(totalSeconds)[0].duration - cooldownTimeBase;

  const warmupSegments = generateWarmup(totalSeconds);
  const { segments: workoutSegments, remainingTime } = generateWorkout(
    workoutTime,
    interval,
  );
  const cooldownSegments = generateCooldown(cooldownTimeBase, remainingTime);

  const finishedSegments = generateFinished();

  return [
    ...warmupSegments,
    ...workoutSegments,
    ...cooldownSegments,
    ...finishedSegments,
  ];
}

// Helper function for generating the workout phase
function generateWorkout(workoutTime, interval) {
  const segments = [];
  const sprintTime = Math.min(
    interval,
    Math.round((2 * workoutTime) / (3 * Math.floor(workoutTime / 90))),
  );
  const walkTime = sprintTime / 2;

  const cycles = Math.floor(workoutTime / (sprintTime + walkTime));

  for (let i = 0; i < cycles; i++) {
    segments.push({
      type: ExerciseType.SPRINT,
      duration: sprintTime,
    });
    workoutTime -= sprintTime;

    if (i === cycles - 1) break;

    if (workoutTime > walkTime) {
      segments.push({
        type: ExerciseType.WALK,
        duration: walkTime,
      });
      workoutTime -= walkTime;
    }
  }

  return { segments, remainingTime: workoutTime };
}

// Helper function for generating the warmup phase
function generateWarmup(totalSeconds) {
  const warmupTime = Math.round(totalSeconds * 0.4);
  return [
    {
      type: ExerciseType.WARMUP,
      duration: warmupTime,
    },
  ];
}

// Helper function for generating the cooldown phase
function generateCooldown(baseCooldownTime, extraTime) {
  const totalCooldown = baseCooldownTime + extraTime;
  return [
    {
      type: ExerciseType.COOLDOWN,
      duration: totalCooldown,
    },
  ];
}

// Helper function for generating the finished phase
function generateFinished() {
  return [
    {
      type: ExerciseType.FINISHED,
      duration: 0,
    },
  ];
}

export function remainingSprints(hiit, currentIntervalIndex) {
  let count = 0;

  for (let i = currentIntervalIndex; i < hiit.length; i++) {
    if (hiit[i].type === ExerciseType.SPRINT) {
      count++;
    }
  }

  return count;
}

// Determine background color based on type
export function bgColorByType(type, withGradient = true) {
  let bgColor;
  switch (type) {
    case ExerciseType.WARMUP:
      bgColor = `${
        withGradient
          ? 'bg-gradient-to-br from-orange-600 to-orange-800'
          : 'border-l-4 border-slate-500 hover:border-orange-600 bg-slate-500'
      }`;
      break;
    case ExerciseType.SPRINT:
      bgColor = `${
        withGradient
          ? 'bg-gradient-to-br from-green-600 to-green-800'
          : 'border-l-4 border-slate-500 hover:border-green-600 bg-slate-500'
      } `;
      break;
    case ExerciseType.WALK:
      bgColor = `${
        withGradient
          ? 'bg-gradient-to-br from-yellow-600 to-yellow-800'
          : 'border-l-4 border-slate-500 hover:border-yellow-600 bg-slate-500'
      } `;
      break;
    case ExerciseType.COOLDOWN:
      bgColor = `${
        withGradient
          ? 'bg-gradient-to-br from-blue-600 to-blue-800'
          : 'border-l-4 border-slate-500 hover:border-blue-600 bg-slate-500'
      }`;
      break;
    case ExerciseType.FINISHED:
      bgColor = `${
        withGradient
          ? 'bg-gradient-to-br from-gray-400 to-gray-600'
          : 'border-l-4 border-slate-500 hover:border-slate-800 bg-slate-500'
      }`;
      break;
    default:
      bgColor = `bg-slate-500`;
  }

  return bgColor;
}

export function paddingByType(type) {
  if (type === 'xxx') return;
  return `py-2`;

  // let padding;
  // switch (type) {
  //   case ExerciseType.WARMUP:
  //     padding = 'py-8';
  //     break;
  //   case ExerciseType.SPRINT:
  //     padding = 'py-3';
  //     break;
  //   case ExerciseType.WALK:
  //     padding = 'py-0';
  //     break;
  //   case ExerciseType.COOLDOWN:
  //     padding = 'py-6';
  //     break;
  //   case ExerciseType.FINISHED:
  //     padding = 'py-4';
  //     break;
  //   default:
  //     padding = 'py-0';
  // }

  // return padding;
}

export function getLocalStorageValue(key, defaultValue) {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : defaultValue;
}
