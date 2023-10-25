/* eslint-env node */
import axios from 'axios';

export async function handler(event) {
  const clientId = process.env.FITBIT_CLIENT_ID;
  const clientSecret = process.env.FITBIT_CLIENT_SECRET;
  const redirectUri = process.env.FITBIT_REDIRECT_URI;

  const code = event.queryStringParameters.code;

  try {
    const response = await axios.post(
      'https://api.fitbit.com/oauth2/token',
      null,
      {
        params: {
          code,
          redirect_uri: redirectUri,
          grant_type: 'authorization_code',
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
          username: clientId,
          password: clientSecret,
        },
      },
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: `Token exchange failed: ${error}`,
      }),
    };
  }
}
