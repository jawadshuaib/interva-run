import React from 'react';
import Button from '../../ui/Button';
import { fitbit, site } from '../../utils/settings';

export default function AuthenticationBtn() {
  const handleFitbitAuth = () => {
    // Define your Fitbit OAuth parameters
    const fitbitOAuthUrl = fitbit.oAuthUrl;
    const clientId = fitbit.clientId;
    const redirectUri = `${site.url}/auth/fitbit`;
    const scope = fitbit.scope;

    // Redirect the user to Fitbit's authorization page
    window.location.href = `${fitbitOAuthUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
  };

  return (
    <Button onClick={handleFitbitAuth} customClass="text-3xl">
      Authenticate
    </Button>
  );
}
