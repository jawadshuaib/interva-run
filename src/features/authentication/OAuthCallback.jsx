// AuthCallback.js
import React, { useEffect } from 'react';
import axios from 'axios';

export default function OAuthCallback() {
  useEffect(() => {
    // Obtain the authorization code from the URL query parameters
    const code = new URLSearchParams(window.location.search).get('code');
    // /.netlify/functions/fitbit-auth
    if (code) {
      console.log('CODE ', code);
      // const handleFitbitAuth = () => {
      //   window.location.href = `/.netlify/functions/fitbit-auth?code=${code}`;
      // };
      // Send a POST request to exchange the authorization code for tokens
      axios
        .post(`/.netlify/functions/fitbit-auth?code=${code}`, { code })
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
