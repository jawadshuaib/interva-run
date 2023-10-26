/* eslint-env node */
import http from 'http';
import WebSocket from 'ws';

const server = http.createServer((req, res) => {
  // Handle HTTP POST requests for Fitbit notifications
  if (req.method === 'POST' && req.url === '/fitbit-notifications') {
    let data = '';

    req.on('data', (chunk) => {
      data += chunk;
    });

    req.on('end', () => {
      try {
        const requestData = JSON.parse(data);

        // Handle and process the Fitbit notifications here
        console.log('Received Fitbit Notifications:', requestData);

        // Broadcast the notification to connected WebSocket clients
        wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(requestData));

            // Emit the 'notification' event here to send notifications to clients
            client.emit('notification', requestData);
          }
        });

        // Respond with an HTTP 204 No Content status code to acknowledge receipt
        res.writeHead(204);
        res.end();
      } catch (error) {
        console.error('Error processing Fitbit notification:', error);
        res.writeHead(500);
        res.end('Internal Server Error');
      }
    });
  } else {
    // Respond with an error status code for unsupported HTTP methods or routes
    res.writeHead(405); // Method Not Allowed
    res.end('Method Not Allowed');
  }
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  // Handle WebSocket connection if needed
  ws.on('message', (message) => {
    // Handle WebSocket messages if needed
    console.log(message);
  });
});

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