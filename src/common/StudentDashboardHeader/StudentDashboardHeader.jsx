import React from "react";
import "./StudentDashboardHeader.css";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import useAxiosGet from '../../customHooks/useAxiosGet';

const StudentDashboardHeader = () => {

  const [userProfile, setUserProfile] = useState({});

  const { userData } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (userData === null) {
      window.location.href = "/sign-in";
    }
  }, [userData]);

  const { response } = useAxiosGet({
    method: 'get',
    url: `users/me`,
  });

  React.useEffect(() => {
    if (response) {
      setUserProfile(response);
    }
  }, [response]);

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
            src={userProfile.picture}
          />
          <div>
            <span>
              {userProfile.name}
            </span>
            <span>{userProfile.profileType}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardHeader;
