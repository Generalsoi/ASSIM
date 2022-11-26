import React from "react";
import "./StudentDashboardHeader.css";
import QnA from "../../assets/images/questionandanswer.png";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import DropDown from "../../assets/images/dropdown.png";
import axios from "axios";
import { apiEndpoint } from "../../config";
import { useEffect } from "react";
import { useState } from "react";

const StudentDashboardHeader = () => {
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    if (!userInfo) {
      window.location.href = "/sign-in"
    }
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
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="student-dashboard-header">
      <input
        type="text"
        placeholder="Search Classes, Documents, Achievements..."
      />

      <div className="student-dashboard-header-details">
        <NotificationsSharpIcon className="notification-icon" />

        <div className="student-detail">
          <img
            alt="user-icon"
            className="student-user-icon"
            src={userData.picture}
          />
          <div>
            <span>
              {userData.name}
            </span>
            <span>{userData.profileType}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardHeader;
