import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import Event from "./components/Event";
import EventDetails from "./components/Event/eventID"
import Register from "./components/Register";
import CreateNewEvent from "./components/CreateNewEvent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/events" element={<Event />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path='/event/register/:id' element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/event/CreateNewEvent" element={<ProtectedRoute ><CreateNewEvent /></ ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
