// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const DashboardPage = () => {
//   const [userName, setUserName] = useState(null);

//   useEffect(() => {
//     console.log('Fetching user data...');
//     axios.get('http://localhost:3030/protected', { withCredentials: true })
//       .then(response => {
//         console.log('User data received:', response.data.displayName);
//         setUserName(response.data);  // Assuming response.data is the user's display name
//       })
//       .catch(error => {
//         console.error('Error fetching user data:', error);
//       });
//   }, []);

//   if (!userName) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Welcome to Dashboard, {userName}</h1>
//       {/* Render other user information here if needed */}
//     </div>
//   );
// };

// export default DashboardPage;
