import React from "react";
import StudentDashboardHeader from "../../../../common/StudentDashboardHeader/StudentDashboardHeader";
import "./Documents.css";
import NewDocuments from "./NewDocuments/NewDocuments";

const Documents = () => {
  return (
    <div className="documents">
      <StudentDashboardHeader />

      <div className="welcome-message">
        <h2>Documents</h2>
      </div>

      <NewDocuments />
    </div>
  );
};

export default Documents;
