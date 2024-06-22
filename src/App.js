import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './style.css';
 // Adjust the path based on your folder structure
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
         
          {/* Define other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
