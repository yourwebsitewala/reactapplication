import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { fontWeight, style } from '@mui/system';

const List = () => {
    const rows = [
        {
            id: 12132354,
            project: "Project 1",
            img: "https://img.freepik.com/free-photo/skyscraper_1112-1069.jpg?size=626&ext=jpg&ga=GA1.1.1492660095.1671433329&semt=sph",
            worker: "Suresh Rajput",
            start_date: "1 march",
            end_date:"1 april",
            status: "Pending",
        },
        {
            id: 12132354,
            project: "Project 1",
            img: "https://img.freepik.com/free-photo/mumbai-skyline-skyscrapers-construction_469504-21.jpg?size=626&ext=jpg&ga=GA1.2.1492660095.1671433329&semt=sph",
            worker: "Suresh Rajput",
            start_date: "1 march",
            end_date:"1 april",
            status: "Completed",
        },
        {
            id: 12132354,
            project: "Project 1",
            img: "https://img.freepik.com/free-photo/mumbai-skyline-seen-from-marine-drive-south-mumbai_469504-11.jpg?size=626&ext=jpg&ga=GA1.2.1492660095.1671433329&semt=sph",
            worker: "Suresh Rajput",
            start_date: "1 march",
            end_date:"1 april",
            status: "Completed",
        },
        {
            id: 12132354,
            project: "Project 1",
            img: "https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-8923.jpg?size=626&ext=jpg&ga=GA1.2.1492660095.1671433329&semt=sph",
            worker: "Suresh Rajput",
            start_date: "1 march",
            end_date:"1 april",
            status: "Pending",
        }
    ]
    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tableCell' style={{fontWeight:"bold",color:"gray"}}>Tracking ID</TableCell>
                        <TableCell className='tableCell' style={{fontWeight:"bold",color:"gray"}}>Project</TableCell>
                        <TableCell className='tableCell' style={{fontWeight:"bold",color:"gray"}}>Worker</TableCell>
                        <TableCell className='tableCell' style={{fontWeight:"bold",color:"gray"}}>Start Date</TableCell>
                        <TableCell className='tableCell' style={{fontWeight:"bold",color:"gray"}}>End Date</TableCell>
                        <TableCell className='tableCell' style={{fontWeight:"bold",color:"gray"}}>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell className='tableCell'>
                            <div className='cellWrapper'>
                                <img src={row.img} alt="project" className='projectImg'/>
                                {row.project}
                            </div>
                            </TableCell>
                            <TableCell className='tableCell'>{row.worker}</TableCell>
                            <TableCell className='tableCell'>{row.start_date}</TableCell>
                            <TableCell className='tableCell'>{row.end_date}</TableCell>
                            <TableCell className='tableCell'><span className={`status ${row.status}`}>{row.status}</span></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default List;