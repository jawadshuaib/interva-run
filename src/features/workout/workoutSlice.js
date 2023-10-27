import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sessionLength: 0,
};

const workoutReducer = createSlice({
  name: 'workout',
  initialState,
  reducers: {
    setSessionLength(state, action) {
      state.sessionLength = action.payload;
    },
  },
});

export default workoutReducer.reducer;

export const { setSessionLength } = workoutReducer.actions;
