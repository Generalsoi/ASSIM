import React from "react";
import "./Sidebar.css";
import Logo from "../../assets/images/Logo.png";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import GroupsIcon from "@mui/icons-material/Groups";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import InsertChartRoundedIcon from "@mui/icons-material/InsertChartRounded";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="assim-logo">
        <img src={Logo} alt="assim-logo" />
      </div>

      <div className="sidebar-links">
        <ul>
          <li className="sidebar-link">
            <GridViewRoundedIcon />
            <p>Dashboard</p>
          </li>
          <li className="sidebar-link">
            <GroupsIcon />
            <p>Classes</p>
          </li>
          <li className="sidebar-link">
            <ArticleRoundedIcon />
            <p>Documents</p>
          </li>
          <li className="sidebar-link">
            <CalendarMonthRoundedIcon />
            <p>Schedule</p>
          </li>
          <li className="sidebar-link">
            <InsertChartRoundedIcon />
            <p>Achievements</p>
          </li>
          <li className="sidebar-link">
            <SettingsIcon />
            <p>Settings</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
