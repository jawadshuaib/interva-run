/* eslint-env node */
import http from 'http';
import WebSocket from 'ws';

const server = http.createServer((req, res) => {
  console.log('TEST 1');
  if (req.method === 'POST') {
    let data = '';

    console.log('TEST 2');

    req.on('data', (chunk) => {
      data += chunk;
    });

    req.on('end', () => {
      try {
        console.log('TEST 3');
        const requestData = JSON.parse(data);

        // Handle and process the Fitbit notifications here
        console.log('Received Fitbit Notifications:', requestData);

        // Broadcast the notification to connected WebSocket clients
        wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            // Emit the 'notification' event to send notifications to clients
            client.emit('notification', requestData);
          }
        });

        res.writeHead(204);
        res.end();
      } catch (error) {
        console.error('Error processing Fitbit notification:', error);
        res.writeHead(500);
        res.end('Internal Server Error');
      }
    });
  } else {
    res.writeHead(405); // Method Not Allowed
    res.end('Method Not Allowed');
  }
});

const wss = new WebSocket.Server({ server });

server.listen(8080, () => {
  console.log('Server is listening on port 8080');
});

// wss.on('connection', (ws) => {
//   // Handle WebSocket connection if needed
//   ws.on('message', (message) => {
//     // Handle WebSocket messages if needed
//   });
// });

// export async function handler(event) {
//   if (event.httpMethod === 'POST') {
//     const requestData = JSON.parse(event.body);
//     // Handle and process the Fitbit notifications here

//     // Broadcast the notification to connected WebSocket clients
//     wss.clients.forEach((client) => {
//       if (client.readyState === WebSocket.OPEN) {
//         client.send(JSON.stringify(requestData));
//       }
//     });

//     return {
//       statusCode: 204,
//     };
//   } else {
//     return {
//       statusCode: 405, // Method Not Allowed
//     };
//   }
// }

// For verification
// export async function handler(event) {
//   const queryParams = event.queryStringParameters;
//   const verifyCode = queryParams?.verify;

//   if (verifyCode !== undefined) {
//     if (
//       verifyCode ===
//       '171ce6758e342278717f95a2034dde6cc4c1a584351b1be329adbe3cfd736039'
//     ) {
//       // Respond with HTTP 204 for the correct verification code
//       return {
//         statusCode: 204,
//       };
//     } else {
//       // Respond with HTTP 404 for an incorrect verification code
//       return {
//         statusCode: 404,
//       };
//     }
//   }
// }
