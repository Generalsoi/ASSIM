import React from "react";
import "./MyDetails.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Avatar from "../../../../../assets/images/Avatar.png";

function createData(personalInfo) {
  return { personalInfo };
}

const rows = [
  createData(
    <div className="created-personal-data">
      <div className="name">
        <p>Name</p>
      </div>
      <div className="name-inputs">
        <input type="text" placeholder="Olivia" />
        <input type="text" placeholder="Rhye" />
      </div>
    </div>
  ),
  createData(
    <div className="created-personal-data">
      <div className="email">
        <p>Email Address</p>
      </div>
      <div className="email-inputs">
        <input type="text" placeholder="olivia@untitledui.com" />
      </div>
    </div>
  ),
  createData(
    <div className="created-personal-data">
      <div className="your-photo">
        <h5>Your photo</h5>
        <p>This will be displayed on your profile.</p>
      </div>
      <div className="your-photo-inputs">
        <img src={Avatar} alt="Avatar" />
        <input type="text" placeholder="Click to upload or drag and drop" />
      </div>
    </div>
  ),
  createData(
    <div className="created-personal-data">
      <div className="school">
        <p>School</p>
      </div>
      <div className="school-inputs">
        <input type="text" placeholder="Solid Steps International School" />
      </div>
    </div>
  ),
  createData(
    <div className="created-personal-data">
      <div className="class">
        <p>Class</p>
      </div>
      <div className="class-inputs">
        <input type="text" placeholder="Junior Secondary School 1" />
      </div>
    </div>
  ),
];

const MyDetails = () => {
  return (
    <div className="my-details">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <div className="personal-info-heading">
                  <div>
                    <h5>Personal Info</h5>
                    <p>Update your photo and personal details here.</p>
                  </div>
                  <div>
                    <button>Cancel</button>
                    <button>Save</button>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.personalInfo}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyDetails;
