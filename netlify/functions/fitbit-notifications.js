/* eslint-env node */

export async function handler(event) {
  const queryParams = event.queryStringParameters;
  const verifyCode = queryParams.verify;

  if (
    verifyCode ===
    '171ce6758e342278717f95a2034dde6cc4c1a584351b1be329adbe3cfd736039'
  ) {
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
