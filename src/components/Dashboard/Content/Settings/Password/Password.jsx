import React from "react";
import "./Password.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { toast } from "react-toastify";
import axios from "axios";
import { apiEndpoint } from "../../../../../config";

const Password = () => {

  const handlePasswordChange = async (event) => {
    event.preventDefault();
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    // let old_password = event.target.elements.old_password.value
    let password = event.target.elements.password.value
    let confirm_password = event.target.elements.confirm_password.value

    if (password !== confirm_password) {
      toast.error("Password does not match")
    } else {
      const formData = {
        "password": password
      };
      try {
        await axios({
          method: 'put',
          url: `${apiEndpoint}users/${userInfo.user.id}/password`,
          data: formData,
          headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + userInfo.token
          },
        })
        toast.success("Password Updated successfuly")
        window.location.reload()
      } catch (error) {
        console.log(error)
      }
    }
  }
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
            <TableCell component="th" scope="row">
              <form onSubmit={handlePasswordChange}>
                <div className="created-password-data">
                  <div className="current-password">
                    <p>Current Password</p>
                  </div>
                  <div className="current-password-inputs">
                    <input type="password" name="old_password" placeholder="*********" />
                  </div>
                </div>
                <br />
                <br />

                <div className="created-password-data">
                  <div className="new-password">
                    <p>New Password</p>
                  </div>
                  <div className="new-password-inputs">
                    <input type="password" name="password" placeholder="*********" />
                    <p>Your new password must be more than 8 characters</p>
                  </div>
                </div>
                <br />
                <br />

                <div className="created-password-data">
                  <div className="confirm-new-password">
                    <p>Confirm New password</p>
                  </div>
                  <div className="your-photo-inputs">
                    <input type="password" name="confirm_password" placeholder="*********" />
                  </div>
                </div>
                <br />
                <br />

                <div className="created-password-data-buttons">
                  <div className="update-password">
                    <button className="cancel-btn">Cancel</button>
                    <button className="update-password-btn" type="submit">Update password</button>
                  </div>
                </div>
              </form>
            </TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Password;
