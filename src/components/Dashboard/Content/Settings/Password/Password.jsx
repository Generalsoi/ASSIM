import React from "react";
import "./Password.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import useAxiosPost from "../../../../../customHooks/useAxiosPost";
import useAlert from "../../../../../customHooks/useAlert";
import BackdropLoader from '../../../../Loader/BackdropLoader';

const Password = () => {
  const alert = useAlert();
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { response: responseEdit, loading: loadingEdit, error, success, message, fetchData } = useAxiosPost({
    method: 'put',
    url: `users/${userInfo.user.id}/password`,
    headers: {
      'Content-Type': 'application/json',
      "Authorization": "Bearer " + userInfo.token
    },
    body: JSON.stringify({
      password
    }),
  });
  const handlePasswordChange = (e) => {
    e.preventDefault();
    if(!oldPassword || !password || !confirmPassword) {
      alert('Error', 'Please fill all fields', 'error', 'Ok', () => {});
      return;
    }
    if (password !== confirmPassword) {
      alert('Error', 'Password and Confirm Password must be the same', 'error', 'Ok', () => {});
      return;
    }
    fetchData();
  };

  useEffect(() => {
    if (responseEdit) {
      alert('Success', 'Password Updated successfuly', 'success', 'Ok', () => {
        window.location.reload();
      });
    }
  }, [error, success, message, responseEdit, alert]);

  return (
    <>
      {loadingEdit && <BackdropLoader />}
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
                      <input type="password" name="old_password" placeholder="*********"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <br />
                  <br />

                  <div className="created-password-data">
                    <div className="new-password">
                      <p>New Password</p>
                    </div>
                    <div className="new-password-inputs">
                      <input type="password" name="password" placeholder="*********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
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
                      <input type="password" name="confirm_password" placeholder="*********"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
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
    </>
  );
};

export default Password;
