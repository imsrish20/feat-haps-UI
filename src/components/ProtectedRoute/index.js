// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ProtectedRoute = ({ children }) => {
  const { userLoggedIn, loading } = useAuth();

  // Display a spinner over the content while the authentication status is loading
  if (loading) {
    return (
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        position="fixed" 
        top={0} 
        left={0} 
        width="100%" 
        height="100%" 
        zIndex={9999} 
        bgcolor="rgba(255, 255, 255, 0.8)" // Optional: semi-transparent background
      >
        <CircularProgress />
      </Box>
    );
  }

  // Redirect to the landing page if the user is not logged in
  if (!userLoggedIn) {
    return <Navigate to="/" replace />;
  }

  // Render the children if the user is logged in
  return children;
};

export default ProtectedRoute;