import React from "react";
import "./Classes.css";
import StudentDashboardHeader from "../../../../common/StudentDashboardHeader/StudentDashboardHeader";
import RecentlyAdded from "./RecentlyAdded/RecentlyAdded";
import AssimClasses from "./AssimClasses/AssimClasses";
import FeaturedClasses from "./FeaturedClasses/FeaturedClasses";

const Classes = () => {
  return (
    <div className="classes">
      <StudentDashboardHeader />

      <div className="welcome-message">
        <h2>Classes</h2>
      </div>

      <RecentlyAdded />
      <AssimClasses />
      <FeaturedClasses />
    </div>
  );
};

export default Classes;
