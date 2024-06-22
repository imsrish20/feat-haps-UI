import { Link } from "react-router-dom";
import { useEffect , useState} from "react";
import axios from "axios";
import { TableContainer, Paper, Table, TableHead, TableCell, TableRow } from '@mui/material'
import { URL } from "../Constants";
function App() {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get(`${URL}/category`).then((response) => {
            if (response.status === 200) {
                setCategory(response.data);
            } else {
                console.error("Something went wrong!");
            }
        })
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h2>
                    CATEGORY
                </h2>
                <TableContainer className={Paper}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Sponsor</TableCell>
                                <TableCell>Audience Size</TableCell>
                                <TableCell>Duration</TableCell>
                            </TableRow>
                        </TableHead>
                        <tbody>
                            {category.map((category, index) => (
                                <TableRow key={index}>
                                    <TableCell>{category.name}</TableCell>
                                    <TableCell>{category.sponser ? "TRUE" : "FALSE"}</TableCell>
                                    <TableCell>{category.audience_size}</TableCell>
                                    <TableCell>{category.duration}</TableCell>
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
