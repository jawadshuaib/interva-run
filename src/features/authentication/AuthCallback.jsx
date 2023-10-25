// AuthCallback.js
import React, { useEffect } from 'react';
import axios from 'axios';

export default function AuthCallback() {
  useEffect(() => {
    // Obtain the authorization code from the URL query parameters
    const code = new URLSearchParams(window.location.search).get('code');

    if (code) {
      // Send a POST request to exchange the authorization code for tokens
      axios
        .post('/fitbit/token-exchange', { code })
        .then((response) => {
          // Store the access token and refresh token securely (e.g., in a state or local storage)
          console.log(response);
        })
        .catch((error) => {
          // Handle any errors
          console.log(error);
        });
    }
  }, []);

  return <div>Authenticating...</div>;
}
