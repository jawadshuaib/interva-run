/* eslint-env node */
import fs from 'fs';

export async function handler(event) {
  // Parse the JSON data from the incoming request
  const requestData = JSON.parse(event.body);
  const updates = requestData.updates;

  // Save the updates to a text file
  const updatesText = JSON.stringify(updates, null, 2);
  fs.writeFileSync('fitbit-updates.txt', updatesText);

  // Respond with HTTP 204 No Content
  return {
    statusCode: 204,
  };
}

// export async function handler(event) {
//   // Parse the JSON data from the incoming request
//   const requestData = JSON.parse(event.body);
//   const updates = requestData.updates;

//   // Handle and process the Fitbit notifications here
//   console.log('Received Fitbit Notifications:', updates);

//   // Respond with HTTP 204 No Content
//   return {
//     statusCode: 204,
//   };
// }
