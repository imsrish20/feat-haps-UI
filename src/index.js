import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Event from "./components/Event";
import NotFound from "./components/NotFound";
import LandingPage from "./components/LandingPage";
import DashboardPage from "./components/Authenticated/Dashboard";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path='/event' element={<Event />} />
      <Route path= '/dashboard' element={<DashboardPage/>} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);