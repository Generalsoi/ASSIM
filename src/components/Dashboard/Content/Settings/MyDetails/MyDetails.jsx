import React, { useEffect, useState } from "react";
import "./MyDetails.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Avatar from "../../../../../assets/images/Avatar.png";
import axios from "axios";
import { apiEndpoint } from "../../../../../config";

function createData(personalInfo) {
  return { personalInfo };
}

const MyDetails = () => {
  const [userData, setUserData] = useState({})
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    fetchData(userInfo)
  }, [])

  const fetchData = async (userInfo) => {
    try {
      const response = await axios({
        method: "GET",
        url: `${apiEndpoint}users/me`,
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": "Bearer " + userInfo.token,
        },
      });
      setUserData(response.data)
      const splitName = response.data.name.split(" ")
      setFirstname(splitName[0])
      setLastname(splitName[1])
    } catch (error) {
      console.log(error)
    }
  }
  const rows = [
    createData(
      <div className="created-personal-data">
        <div className="name">
          <p>Name</p>
        </div>
        <div className="name-inputs">
          <input type="text" value={firstname} />
          <input type="text" value={lastname} />
        </div>
      </div>
    ),
    createData(
      <div className="created-personal-data">
        <div className="email">
          <p>Email Address</p>
        </div>
        <div className="email-inputs">
          <input type="text" value={userData.email} />
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
          <input type="file" name="" id="" />
        </div>
      </div>
    ),
  ];

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
