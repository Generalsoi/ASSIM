import React from "react";
import "./MyDetails.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";

function createData(personalInfo) {
  return { personalInfo };
}

const rows = [
  createData(
    <div className="created-data">
      <div>
        <h5>Emmanuel</h5>
        <p>SS1</p>
      </div>
    </div>,
    "22 Jan 2022"
  ),
  createData(
    <div className="created-data">
      <div>
        <h5>Emmanuel</h5>
        <p>SS1</p>
      </div>
    </div>,
    "22 Jan 2022"
  ),
  createData(
    <div className="created-data">
      <div>
        <h5>Emmanuel</h5>
        <p>SS1</p>
      </div>
    </div>,
    "22 Jan 2022"
  ),
  createData(
    <div className="created-data">
      <div>
        <h5>Emmanuel</h5>
        <p>SS1</p>
      </div>
    </div>,
    "22 Jan 2022"
  ),
  createData(
    <div className="created-data">
      <div>
        <h5>Emmanuel</h5>
        <p>SS1</p>
      </div>
    </div>,
    "22 Jan 2022"
  ),
  createData(
    <div className="created-data">
      <div>
        <h5>Emmanuel</h5>
        <p>SS1</p>
      </div>
    </div>,
    "22 Jan 2022"
  ),
  createData(
    <div className="created-data">
      <div>
        <h5>Emmanuel</h5>
        <p>SS1</p>
      </div>
    </div>,
    "22 Jan 2022"
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
