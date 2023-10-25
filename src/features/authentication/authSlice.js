import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: null,
  expiresIn: null,
  refreshToken: null,
  error: null,
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    setExpiresIn(state, action) {
      state.expiresIn = action.payload;
    },
    setRefreshToken(state, action) {
      state.refreshToken = action.payload;
    },
    setError(state, action) {
      state.error = action.error;
    },
  },
});

export default authReducer.reducer;

export const { setAccessToken, setExpiresIn, setRefreshToken, setError } =
  authReducer.actions;
