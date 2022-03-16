import React, { useState } from "react";
import Assignments from "./Assignments";
import "./ClassInformation.css";
import InProgress from "./InProgress";
import RecentClass from "./RecentClass";

const ClassInformation = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="class-info">
      <ul className="class-info-headings">
        <li
          className={(activeTab === "tab1" && "active") + " class-info-heading"}
          onClick={() => setActiveTab("tab1")}
        >
          Recent Class
        </li>
        <li
          className={(activeTab === "tab2" && "active") + " class-info-heading"}
          onClick={() => setActiveTab("tab2")}
        >
          In Progress
        </li>
        <li
          className={(activeTab === "tab3" && "active") + " class-info-heading"}
          onClick={() => setActiveTab("tab3")}
        >
          Assignments
        </li>
      </ul>

      <div>
        {activeTab === "tab1" && <RecentClass />}
        {activeTab === "tab2" && <InProgress />}
        {activeTab === "tab3" && <Assignments />}
      </div>
    </div>
  );
};

export default ClassInformation;
