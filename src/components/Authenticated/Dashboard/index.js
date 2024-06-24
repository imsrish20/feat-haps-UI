import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log('Fetching user data...');
    axios.get('http://localhost:3030/protected', { withCredentials: true })  // Adjust port if needed
      .then(response => {
        console.log('User data received:', response.data);
        setUser(response.data);  // Assuming response.data directly contains user info
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome to Dashboard, {user.displayName}</h1>
    </div>
  );
};

export default DashboardPage;
