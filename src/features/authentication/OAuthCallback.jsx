// AuthCallback.js
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
  setAccessToken,
  setError,
  setExpiresIn,
  setRefreshToken,
} from './authSlice';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from './useLocalStorage';

export default function OAuthCallback() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Obtain the authorization code from the URL query parameters
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      // Send a POST request to exchange the authorization code for tokens
      axios
        .post(`/.netlify/functions/fitbit-auth?code=${code}`)
        .then((response) => {
          // Store the access token and refresh token securely (e.g., in a state or local storage)
          dispatch(setAccessToken(response.data.access_token));
          dispatch(setExpiresIn(response.data.expires_in));
          dispatch(setRefreshToken(response.data.refresh_token));

          useLocalStorage('accessToken', response.data.access_token);
          useLocalStorage('expiresIn', response.data.expires_in);
          useLocalStorage('refreshToken', response.data.refresh_token);
        })
        .catch((error) => {
          // Handle any errors
          dispatch(setError(error));
        })
        .finally(() => {
          navigate('/dashboard');
        });
    }
  }, []);

  return <div>Authenticating...</div>;
}
