import React, { useEffect, useState } from "react";
import "./MyDetails.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useAxiosPost from "../../../../../customHooks/useAxiosPost";
import useAxiosGet from "../../../../../customHooks/useAxiosGet";
import useAlert from "../../../../../customHooks/useAlert";
import BackdropLoader from '../../../../Loader/BackdropLoader';

const MyDetails = () => {
  const alert = useAlert();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");


  const { response, loading } = useAxiosGet({
    method: 'get',
    url: `users/me`,
  });

  React.useEffect(() => {
    if (response) {
      const fullName = response?.name?.split(" ") || [];
      setFirstname(fullName[0]);
      setLastname(fullName[1]);
      setEmail(response.email);
      setPicture(response.picture);
    }
  }, [response]);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { response: responseEdit, loading: loadingEdit, error, success, message, fetchData } = useAxiosPost({
    method: 'put',
    url: `users/${userInfo.user.id}`,
    headers: {
      "Content-Type": "multipart/form-data",
      "Authorization": "Bearer " + userInfo.token
    },
    body: JSON.stringify({
      firstname,
      lastname,
      email,
      picture
    }),
  });
  const editUser = (e) => {
    e.preventDefault();
    fetchData();
  };

  useEffect(() => {
    if (responseEdit) {
      alert('Success', 'Profile Updated successfuly', 'success', 'Ok', () => {
      });
    }
  }, [error, success, message, responseEdit, alert]);

  return (
    <>
      {loading || loadingEdit ? <BackdropLoader /> : null}
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
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              <TableCell component="th" scope="row">
                <form onSubmit={editUser}>
                  <div className="created-personal-data">
                    <div className="name">
                      <p>Name</p>
                    </div>
                    <div className="name-inputs">
                      <input type="text" name="firstname" 
                      value={firstname || ''} 
                      onChange={(e) => setFirstname(e.target.value)} />
                      <input type="text" name="lastname" 
                      value={lastname || ''} 
                      onChange={(e) => setLastname(e.target.value)} />
                    </div>
                  </div>
                  <br />
                  <br />

                  <div className="created-personal-data">
                    <div className="email">
                      <p>Email Address</p>
                    </div>
                    <div className="email-inputs">
                      <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled />
                    </div>
                  </div>
                  <br />
                  <br />

                  <div className="created-personal-data">
                    <div className="your-photo">
                      <h5>Your photo</h5>
                      <p>This will be displayed on your profile.</p>
                    </div>
                    <div className="your-photo-inputs">
                      <input type="file" name="picture"
                        onChange={(e) => setPicture(e.target.files[0])}
                      />
                    </div>
                  </div>
                  <div className="created-password-data-buttons">
                    <div className="update-password">
                      <button className="cancel-btn">Cancel</button>
                      <button className="update-password-btn" type="submit">Update</button>
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

export default MyDetails;
