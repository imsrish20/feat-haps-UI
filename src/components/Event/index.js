import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { TableContainer, Paper, Table, TableHead, TableCell, TableRow } from '@mui/material'
import { URL } from "../Constants";
function App() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get(`${URL}/event`).then((response) => {
            if (response.status === 200) {
                setEvents(response.data);
            } else {
                console.error("Something went wrong!");
            }
        })
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h2>
                    EVENT
                </h2>
                <TableContainer className={Paper}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Event</TableCell>
                                <TableCell>Year</TableCell>
                                <TableCell>Fee</TableCell>
                                <TableCell>Start Date</TableCell>
                                <TableCell>End Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <tbody>
                            {events.map((event, index) => (
                                <TableRow key={index}>
                                    <TableCell>{event.name}</TableCell>
                                    <TableCell>{event.year}</TableCell>
                                    <TableCell>{event.fee}</TableCell>
                                    <TableCell>{event.start_date}</TableCell>
                                    <TableCell>{event.end_date}</TableCell>
                                </TableRow>
                            ))}
                        </tbody>
                    </Table>
                </TableContainer>
                <Link to="/"><button>Home</button></Link>
                <Link to="/event/form"><button>Create Event</button></Link>

            </header>
        </div>
    );
}

export default App;
