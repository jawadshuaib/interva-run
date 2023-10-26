// -- This file is for authenticating Subscription with fitbit -- //
// -- It is not necessary for Web API -- //
/* eslint-env node */

// For verification
export async function handler(event) {
  const queryParams = event.queryStringParameters;
  const verifyCode = queryParams?.verify;

  if (verifyCode !== undefined) {
    if (verifyCode === '--VERIFICATION-CODE-FROM-FITBIT-HERE--') {
      // Respond with HTTP 204 for the correct verification code
      return {
        statusCode: 204,
      };
    } else {
      // Respond with HTTP 404 for an incorrect verification code
      return {
        statusCode: 404,
      };
    }
  }
}
