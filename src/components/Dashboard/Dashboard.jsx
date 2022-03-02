import React from "react";
import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">Content</div>
    </div>
  );
};

export default Homepage;
