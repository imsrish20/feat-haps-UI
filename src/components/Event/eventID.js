import * as React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Typography, CssBaseline, AppBar, Toolbar, useScrollTrigger, Slide } from '@mui/material';

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
        <AppBar style={{backgroundColor: "orange"}}>
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

const EventDetails = (event) => {
  console.log(event.name);


  return (
    <React.Fragment>
      <CssBaseline />
      <HideAppBar>
        Event Details for ID: {event.name}
      </HideAppBar>
      <div style={{ padding: 16, marginTop: 64 }}>
        <Typography variant="body1">
          Here is some detailed information about the event with ID {event.id}...
        </Typography>
      </div>
    </React.Fragment>
  );
}

export default EventDetails;
