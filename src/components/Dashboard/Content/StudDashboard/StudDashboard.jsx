import React from "react";
import StudentDashboardHeader from "../../../../common/StudentDashboardHeader/StudentDashboardHeader";
import "./StudDashboard.css";
import ClassInformation from "./ClassInformation/ClassInformation";
import TopClassesAndPerformers from "./TopClassesAndPerformers/TopClassesAndPerformers";

const StudDashboard = () => {
  return (
    <div className="student-dashboard">
      <StudentDashboardHeader />

      <div className="welcome-message">
        <h2>
          Welcome back, <span>David</span>
        </h2>
        <p>
          We have saved your prevous classes for you so you can keep up and
          improve your progress
        </p>
      </div>

      <ClassInformation />
      <TopClassesAndPerformers />
    </div>
  );
};

export default StudDashboard;
