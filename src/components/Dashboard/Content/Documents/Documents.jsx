import React from "react";
import StudentDashboardHeader from "../../../../common/StudentDashboardHeader/StudentDashboardHeader";
import Sidebar from "../../Sidebar/Sidebar";
import AssimDocuments from "./AssimDocuments";
import NewDocuments from "./NewDocuments";
import "./Documents.css";
import PopularDocuments from "./PopularDocuments";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../../../assets/images/Logo.png";
import { accessToken } from "../../../../config";
import BackdropLoader from '../../../Loader/BackdropLoader';
import { useEffect, useState } from "react";
import useAxiosGet2 from '../../../../customHooks/useAxiosGet2';
import Doc from "../../../../assets/images/bxs-file-doc.png";

const Documents = () => {
  const [activeMenu, setActiveMenu] = useState("menu1");
  const [open, setOpen] = useState(false);
  const [documents, setDocuments] = useState([]);

  const handleClick = () => {
    setOpen(!open);
  };

  const { response, loading } = useAxiosGet2({
    method: 'get',
    url: `documents?access_token=${accessToken}`,
  });

  useEffect(() => {
    if (response) {
      setDocuments(response.rows);
    }
  }, [response]);

  return (
    <>
      {loading ? <BackdropLoader /> : null}
      <div className="dashboard">
        <div className={open ? "sidebar-mobile open" : "sidebar"}>
          <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        </div>
        <div className="content">
          <div className="documents-sect">
            <StudentDashboardHeader />

            <div className="welcome-message">
              <h2>Documents</h2>
            </div>
            {documents && documents.length > 0 ? (
              <NewDocuments
                documents={documents}
              />
            ) :
              <div className="empty_doc">
                <img src={Doc} alt="empty" />
                <p>No documents available</p>
              </div>
            }

            {/* <AssimDocuments /> */}
            {/* <PopularDocuments /> */}
          </div>
        </div>

        <div className="mobile-view">
          <img src={Logo} alt="assim-logo" />
          <MenuIcon className="hamburger" onClick={handleClick} />
        </div>

        {open && <div className="overlay" />}
      </div>
    </>

  );
};

export default Documents;
