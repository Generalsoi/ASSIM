import React from "react";
import "./StudentDashboardHeader.css";
import QnA from "../../assets/images/questionandanswer.png";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import DropDown from "../../assets/images/dropdown.png";

const StudentDashboardHeader = () => {
  return (
    <div className="student-dashboard-header">
      <input
        type="text"
        placeholder="Search Classes, Documents, Achievements..."
      />

      <div className="student-dashboard-header-details">
        <a href="/">
          <div>
            <img src={QnA} alt="qna-icon" />
            <span>Need Help?</span>
          </div>
        </a>

        <NotificationsSharpIcon className="notification-icon" />

        <div className="student-detail">
          <img
            src="data:image/png;base64,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"
            alt="user-icon"
            className="student-user-icon"
          />
          <div>
            <span>
              David Chimezie <img src={DropDown} alt="dropdown" />
            </span>
            <span>SS1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardHeader;
