import React from "react";
import StudentDashboardHeader from "../../../../common/StudentDashboardHeader/StudentDashboardHeader";
import "./Achievements.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";

function createData(Students, Ratings, Lastassessed) {
  return { Students, Ratings, Lastassessed };
}

const rows = [
  createData(
    <div>
      <p>Emmanuel</p> <p>SS1</p>
    </div>,
    159,
    6.0
  ),
  createData("Ice cream sandwich", 237),
  createData("Eclair", 262, 16.0),
  createData("Cupcake", 305, 3.7),
  createData("Gingerbread", 356, 16.0),
];

const Achievements = () => {
  return (
    <div className="achievements">
      <StudentDashboardHeader />

      <div className="welcome-message">
        <h2>Achievements</h2>
        <p>Keep track of your colleagues and their ratings.</p>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                <div>
                  <p>Major Row Innit</p>
                  <h5>Check out</h5>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Students</TableCell>
              <TableCell align="right">Ratings</TableCell>
              <TableCell align="right">Last assessed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Students}
                </TableCell>
                <TableCell align="right">{row.Ratings}</TableCell>
                <TableCell align="right">{row.Lastassessed}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Achievements;
