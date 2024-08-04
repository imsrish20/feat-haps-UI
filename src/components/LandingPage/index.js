// LandingPage.jsx
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import Navbar from '../Navbar';
import EventCard from '../EventCard';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import { URL } from '../Constants';

function LandingPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/events`).then((response) => {
      console.log(response.data.events);
      if (response.status === 200) {
        setEvents(response.data.events);
      } else {
        console.error('Something went wrong!');
      }
    });
  }, []);

  return (
    <div>
      <Navbar />
      <PhotoGallery />
      <Grid container>
        {events.map((event, index) => ( // Added index to avoid warning
          <Grid key={index} xs={4} item> {/* Added item to fix Grid layout */}
            <center>
              <EventCard event={event} />
            </center>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default LandingPage;
