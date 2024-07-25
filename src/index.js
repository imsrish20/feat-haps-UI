import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Event from "./components/Event";
import NotFound from "./components/NotFound";
import LandingPage from "./components/LandingPage";
import DashboardNewPage from "./components/NewDashboard";
import CreateNewEvent from "./components/CreateNewEvent";
import Register from "./components/Register";
import EventDetails from "./components/Event/eventID";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path='/events' element={<Event />} />
      {/* <Route path= '/dashboard' element={<DashboardPage/>} /> */}
      <Route path= '/newdashboard' element={<DashboardNewPage/>} />
      <Route path='/event/createNewEvent' element={<CreateNewEvent/>}/>
      <Route path='/event/register/:id' element={<Register/>}/>
      <Route path="/event/:id" element={<EventDetails />} />


      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);