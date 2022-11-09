import React from "react";
import "./Password.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(password) {
  return { password };
}

const rows = [
  createData(
    <div className="created-password-data">
      <div className="current-password">
        <p>Current Password</p>
      </div>
      <div className="current-password-inputs">
        <input type="password" placeholder=".........." />
      </div>
    </div>
  ),
  createData(
    <div className="created-password-data">
      <div className="new-password">
        <p>New Password</p>
      </div>
      <div className="new-password-inputs">
        <input type="password" placeholder=".........." />
        <p>Your new password must be more than 8 characters</p>
      </div>
    </div>
  ),
  createData(
    <div className="created-password-data">
      <div className="confirm-new-password">
        <p>Confirm New password</p>
      </div>
      <div className="your-photo-inputs">
        <input type="password" placeholder=".........." />
      </div>
    </div>
  ),
  createData(
    <div className="created-password-data-buttons">
      <div className="update-password">
        <button className="cancel-btn">Cancel</button>
        <button className="update-password-btn">Update password</button>
      </div>
    </div>
  ),
];

const Password = () => {
  return (
    <div className="my-details">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <div className="password-info-heading">
                  <div>
                    <h5>Password</h5>
                    <p>
                      Please enter your current password to change your password
                    </p>
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
                  {row.password}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Password;
