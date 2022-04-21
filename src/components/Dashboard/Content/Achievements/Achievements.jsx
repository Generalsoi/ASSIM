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
import Progressbar from "./Progressbar";

//imported images
import EmmanuelAvatar from "../../../../assets/images/emmanuelavatar.png";

function createData(Students, Ratings, Lastassessed) {
  return { Students, Ratings, Lastassessed };
}

const rows = [
  createData(
    <div className="created-data">
      <img src={EmmanuelAvatar} alt="emmanuel avatar" />
      <div>
        <h5>Emmanuel</h5>
        <p>SS1</p>
      </div>
    </div>,
    <Progressbar completed={60} />,
    "22 Jan 2022"
  ),
  createData(
    <div className="created-data">
      <img src={EmmanuelAvatar} alt="emmanuel avatar" />
      <div>
        <h5>Emmanuel</h5>
        <p>SS1</p>
      </div>
    </div>,
    <Progressbar completed={60} />,
    "22 Jan 2022"
  ),
  createData(
    <div className="created-data">
      <img src={EmmanuelAvatar} alt="emmanuel avatar" />
      <div>
        <h5>Emmanuel</h5>
        <p>SS1</p>
      </div>
    </div>,
    <Progressbar completed={60} />,
    "22 Jan 2022"
  ),
  createData(
    <div className="created-data">
      <img src={EmmanuelAvatar} alt="emmanuel avatar" />
      <div>
        <h5>Emmanuel</h5>
        <p>SS1</p>
      </div>
    </div>,
    <Progressbar completed={60} />,
    "22 Jan 2022"
  ),
  createData(
    <div className="created-data">
      <img src={EmmanuelAvatar} alt="emmanuel avatar" />
      <div>
        <h5>Emmanuel</h5>
        <p>SS1</p>
      </div>
    </div>,
    <Progressbar completed={60} />,
    "22 Jan 2022"
  ),
  createData(
    <div className="created-data">
      <img src={EmmanuelAvatar} alt="emmanuel avatar" />
      <div>
        <h5>Emmanuel</h5>
        <p>SS1</p>
      </div>
    </div>,
    <Progressbar completed={60} />,
    "22 Jan 2022"
  ),
  createData(
    <div className="created-data">
      <img src={EmmanuelAvatar} alt="emmanuel avatar" />
      <div>
        <h5>Emmanuel</h5>
        <p>SS1</p>
      </div>
    </div>,
    <Progressbar completed={60} />,
    "22 Jan 2022"
  ),
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
                <div className="main-table-header">
                  <div>
                    <button>View All</button>
                    <button>Ascending</button>
                    <button>Descending</button>
                  </div>
                  <div>
                    <input type="search" placeholder="Search" />
                  </div>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Students</TableCell>
              <TableCell align="left">Ratings</TableCell>
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
                <TableCell align="center">{row.Ratings}</TableCell>
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
