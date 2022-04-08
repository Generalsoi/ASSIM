import React from "react";
import StudentDashboardHeader from "../../../../common/StudentDashboardHeader/StudentDashboardHeader";
import AssimDocuments from "./AssimDocuments/AssimDocuments";
import "./Documents.css";
import NewDocuments from "./NewDocuments/NewDocuments";
import PopularDocuments from "./PopularDocuments/PopularDocuments";

const Documents = () => {
  return (
    <div className="documents">
      <StudentDashboardHeader />

      <div className="welcome-message">
        <h2>Documents</h2>
      </div>

      <NewDocuments />
      <AssimDocuments />
      <PopularDocuments />
    </div>
  );
};

export default Documents;
