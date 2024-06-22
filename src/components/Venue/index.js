import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { TableContainer, Paper, Table, TableHead, TableCell, TableRow } from '@mui/material'
import { URL } from "../Constants";
function App() {
    const [venue, setVenue] = useState([]);

    useEffect(() => {
        axios.get(`${URL}/venue`).then((response) => {
            if (response.status === 200) {
                setVenue(response.data);
            } else {
                console.error("Something went wrong!");
            }
        })
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h2>
                    VENUE
                </h2>
                
                <TableContainer className={Paper}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Location</TableCell>
                                <TableCell>Approval required</TableCell>
                                <TableCell>capacity</TableCell>
                            </TableRow>
                        </TableHead>
                        <tbody>
                            {venue.map((venue, index) => (
                                <TableRow key={index}>
                                    <TableCell>{venue.name}</TableCell>
                                    <TableCell>{venue.location}</TableCell>
                                    <TableCell>{venue.approval_required ? "Yes" : "No"}</TableCell>
                                    <TableCell>{venue.capacity}</TableCell>
                                </TableRow>
                            ))}
                        </tbody>
                    </Table>
                </TableContainer>
                <Link to="/"><button>Home</button></Link>


            </header>
        </div>
    );
}

export default App;
