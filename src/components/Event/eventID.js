import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import axios from "axios";
import PhotoGallery from "./gallery";
import {
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
  Box,
} from "@mui/material";
import { URL } from "../Constants";
import EventCard from "./eventcard";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const HideAppBar = (props) => {
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar style={{ backgroundColor: "orange" }}>
          <Toolbar>
            <Typography variant="h6" component="div">
              {props.children}
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
};

const EventDetails = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${URL}/events`)
      .then((response) => {
        if (response.status === 200) {
          setEvents(response.data.events);
        } else {
          console.error("Something went wrong!");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setLoading(false);
      });
  }, []);

  const event = events.find((event) => event._id === id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <HideAppBar>{event.name}</HideAppBar>
      <Box sx={{ padding: 2 }}>
        <Typography variant="body1">{/* Add any additional event details here */}</Typography>
      </Box>
      <Box sx={{ marginTop: 3}}>
        <PhotoGallery />
      </Box>
      <Box sx={{ marginTop: -20 ,marginLeft: 10}}>
        <EventCard event={event} />
      </Box>
      

    </React.Fragment>
  );
};

export default EventDetails;
