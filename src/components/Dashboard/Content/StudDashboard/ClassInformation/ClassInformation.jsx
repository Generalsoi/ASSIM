import React from "react";
import Assignments from "./Assignments";
import "./ClassInformation.css";
import InProgress from "./InProgress";
import RecentClass from "./RecentClass";
import { accessToken } from "../../../../../config";
import BackdropLoader from '../../../../Loader/BackdropLoader';
import { useEffect, useState } from "react";
import useAxiosGet2 from '../../../../../customHooks/useAxiosGet2';

const ClassInformation = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [classes, setClasses] = useState([]);
  const [assignments, setAssignments] = useState([]);

  const userId = localStorage.getItem('userInfo');
  const id = JSON.parse(userId).user.id;
  const { response, loading } = useAxiosGet2({
    method: 'get',
    url: `myCurrentClasses?userId=${id}&access_token=${accessToken}`,
  });

  useEffect(() => {
    if (response) {
      setClasses(response.rows);
    }
  }, [response]);

  const { response: response2, loading: loading2 } = useAxiosGet2({
    method: 'get',
    url: `documents?access_token=${accessToken}`,
    // url: `assignments?userId=${userId.id}&access_token=${accessToken}`,
  });

  useEffect(() => {
    if (response2) {
      setAssignments(response2.rows);
    }
  }, [response2]);

  return (
    <>
      {loading || loading2 ? <BackdropLoader /> : null}
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

        <div className="class-info-contents">
          {activeTab === "tab1" && <RecentClass classes={classes} />}
          {activeTab === "tab2" && <InProgress classes={classes} />}
          {activeTab === "tab3" && <Assignments assignments={assignments} />}
        </div>
      </div>
    </>
  );
};

export default ClassInformation;
