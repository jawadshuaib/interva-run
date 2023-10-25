import axios from 'axios';

// Replace with the actual API endpoint and access token
const apiUrl =
  'https://api.fitbit.com/1/user/[user-id]/activities/heart/date/[date]/[period].json';

export const fetchHeartRateData = async (accessToken) => {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // Handle the response data (heart rate data) here
    const heartRateData = response.data;
    console.log(heartRateData);
  } catch (error) {
    // Handle errors
    console.error('Error fetching heart rate data:', error);
  }
};
