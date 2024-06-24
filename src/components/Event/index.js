import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { URL } from '../Constants';
import { Button } from '@mui/material';
import {Box} from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'orange',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/events`)
      .then((response) => {
        if (response.status === 200) {
          const { events } = response.data;
          setEvents(events);
        } else {
          console.error("Received unexpected status code:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Event</StyledTableCell>
                <StyledTableCell>Description</StyledTableCell>
                <StyledTableCell>Year</StyledTableCell>
                <StyledTableCell>Fee</StyledTableCell>
                <StyledTableCell>Start Date</StyledTableCell>
                <StyledTableCell>End Date</StyledTableCell>
                <StyledTableCell>Venue</StyledTableCell>
                <StyledTableCell>Organisers</StyledTableCell>
                <StyledTableCell>Categories</StyledTableCell>
                <StyledTableCell>Sponsors</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {events.map((event, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">{event.name}</StyledTableCell>
                  <StyledTableCell>{event.description}</StyledTableCell>
                  <StyledTableCell>{event.year}</StyledTableCell>
                  <StyledTableCell>{event.fee}</StyledTableCell>
                  <StyledTableCell>{new Date(event.startDate).toLocaleDateString()}</StyledTableCell>
                  <StyledTableCell>{new Date(event.endDate).toLocaleDateString()}</StyledTableCell>
                  <StyledTableCell>{event.venue ? event.venue.name : ''}</StyledTableCell>
                  <StyledTableCell>{event.organisers ? event.organisers.map(o => o.name).join(', ') : ''}</StyledTableCell>
                  <StyledTableCell>{event.categories ? event.categories.map(c => c.name).join(', ') : ''}</StyledTableCell>
                  <StyledTableCell>{event.sponsers ? event.sponsers.map(s => s.name).join(', ') : ''}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        display: 'flex',
        gap: '10px',
      }}
    >
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFA726",
            color: "white",
            '&:hover': {
              backgroundColor: "#FF9800",
            },
          }}
        >
          Home
        </Button>
      </Link>
      <Link to="/event/createNewEvent" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFA726",
            color: "white",
            '&:hover': {
              backgroundColor: "#FF9800",
            },
          }}
        >
          Create Event
        </Button>
      </Link>
    </Box>
      </header>
    </div>
  );
}

export default App;
