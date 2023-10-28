import { configureStore } from '@reduxjs/toolkit';
import workoutReducer from './features/setup/workoutSlice';

const store = configureStore({
  reducer: {
    workout: workoutReducer,
  },
});

export default store;
