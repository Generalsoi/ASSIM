import React from "react";
import "./Sidebar.css";
import Logo from "../../assets/images/Logo.png";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import GroupsIcon from "@mui/icons-material/Groups";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";

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
            Dashboard
          </li>
          <li className="sidebar-link">
            <GroupsIcon />
            Classes
          </li>
          <li className="sidebar-link">
            <ArticleRoundedIcon />
            Documents
          </li>
          <li className="sidebar-link"></li>
          <li className="sidebar-link"></li>
          <li className="sidebar-link"></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
