import React, { useEffect } from 'react';
import io from 'socket.io-client';

// import { useSelector } from 'react-redux';
import AuthenticationBtn from '../authentication/AuthenticationBtn';

export default function Dashboard() {
  const accessToken = localStorage.getItem('accessToken');

  const [notifications, setNotifications] = React.useState([]);

  useEffect(() => {
    // Replace with the URL of your server where WebSocket is hosted
    const socket = io('https://interva-run.netlify.app/fitbit-notifications');

    socket.on('notification', (data) => {
      // Handle incoming notifications
      setNotifications((prevNotifications) => [...prevNotifications, data]);
    });

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  console.log(notifications);
  // useEffect(() => {
  //   const socket = io('/.netlify/functions/fitbit-notifications'); // Replace with your server URL

  //   // Event listener for notifications received over WebSocket
  //   socket.on('notification', (data) => {
  //     // Handle the incoming notification data in your app
  //     console.log('Received Notification:', data);
  //   });

  //   return () => {
  //     // Clean up the WebSocket connection when unmounting the component
  //     socket.disconnect();
  //   };
  // }, []);

  // useEffect(() => {
  //   if (accessToken === null) return;

  //   // Create a new WebSocket connection to the Fitbit Real-Time API
  //   const socket = new WebSocket('wss://api.fitbit.com/1/user/-/bp/live');

  //   // Set up the event handlers for the WebSocket connection
  //   socket.onopen = () => {
  //     // Connection is open; you can now subscribe to heart rate data.
  //     // You will need to send an authorization header with your access token.

  //     // Prepare the subscription request, including the access token
  //     const subscriptionRequest = {
  //       action: 'SUBSCRIBE',
  //       device: 'tracker',
  //       type: 'heartrate',
  //       access_token: accessToken,
  //     };

  //     // Send the subscription request as a JSON string
  //     socket.send(JSON.stringify(subscriptionRequest));
  //   };

  //   socket.onmessage = (event) => {
  //     // Handle real-time heart rate data received in the event.data
  //     const heartRateData = JSON.parse(event.data);
  //     console.log('Live Heart Rate Data:', heartRateData);
  //   };

  //   socket.onclose = (event) => {
  //     console.log('Socket is closed', event);
  //     // Handle WebSocket closure (e.g., reconnection logic, error handling)
  //   };

  //   return () => {
  //     // Close the WebSocket when the component unmounts
  //     socket.close();
  //   };
  // }, [accessToken]);

  return (
    <div className="dark:bg-slate-800">
      <h1 className="grid h-screen place-items-center">
        {accessToken === null && <AuthenticationBtn />}
        {accessToken !== null && <div>Authenticated with {accessToken}</div>}
      </h1>
    </div>
  );
}
