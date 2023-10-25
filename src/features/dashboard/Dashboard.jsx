import React from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  const { accessToken } = useSelector((state) => state.auth);

  console.log(accessToken);

  const handleFitbitAuth = () => {
    // Define your Fitbit OAuth parameters
    const fitbitOAuthUrl = 'https://www.fitbit.com/oauth2/authorize';
    const clientId = '23RHQL';
    const redirectUri = 'https://interva-run.netlify.app/auth/fitbit';
    const scope = 'heartrate activity profile';

    // Redirect the user to Fitbit's authorization page
    window.location.href = `${fitbitOAuthUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline grid h-screen place-items-center">
        <input type="button" onClick={handleFitbitAuth} value="Authenticate" />
      </h1>
    </div>
  );
}
