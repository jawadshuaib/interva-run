import { configureStore } from '@reduxjs/toolkit';
import workoutReducer from './features/workout/workoutSlice';

const store = configureStore({
  reducer: {
    workout: workoutReducer,
  },
});

export default store;
