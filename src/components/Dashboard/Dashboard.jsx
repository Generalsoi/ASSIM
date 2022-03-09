import React from "react";
import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Content />
      </div>
    </div>
  );
};

export default Homepage;
