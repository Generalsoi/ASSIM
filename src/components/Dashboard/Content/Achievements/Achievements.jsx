import React from "react";
import StudentDashboardHeader from "../../../../common/StudentDashboardHeader/StudentDashboardHeader";
import "./Achievements.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Progressbar from "./Progressbar";
import Logo from "../../../../assets/images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { accessToken } from "../../../../config";
import BackdropLoader from '../../../Loader/BackdropLoader';
import { useEffect, useState } from "react";
import useAxiosGet2 from '../../../../customHooks/useAxiosGet2';

//imported images
import EmmanuelAvatar from "../../../../assets/images/emmanuelavatar.png";
import Sidebar from "../../Sidebar/Sidebar";
import { formatDate } from '../../../../functions';



const Achievements = () => {
  const [achievements, setAchievements] = useState([]);

  const { response, loading } = useAxiosGet2({
    method: 'get',
    url: `achievements?access_token=${accessToken}`,
  });

  useEffect(() => {
    if (response) {
      setAchievements(response.rows);
    }
  }, [response]);


  const [activeMenu, setActiveMenu] = useState("menu1");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      {loading ? <BackdropLoader /> : null}
      <div className="dashboard">
        <div className={open ? "sidebar-mobile open" : "sidebar"}>
          <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        </div>
        <div className="content">
          <div className="achievements">
            <StudentDashboardHeader />

            <div className="welcome-message">
              <h2>Achievements</h2>
              <p>Keep track of your colleagues and their ratings.</p>
            </div>

            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" colSpan={3}>
                      <div className="main-table-header">
                        <div>
                          <button>View All</button>
                          <button>Ascending</button>
                          <button>Descending</button>
                        </div>
                        <div>
                          <input type="search" placeholder="Search" />
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Students</TableCell>
                    <TableCell align="left">Ratings</TableCell>
                    <TableCell align="right">Last assessed</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  {achievements.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <div className="created-data">
                          <img src={EmmanuelAvatar} alt="emmanuel avatar" />
                          <div>
                            <h5>Emmanuel</h5>
                            <p>SS1</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell align="center"><Progressbar completed={row.rating} /></TableCell>
                      <TableCell align="right"><span 
                         style={{
                          color: '#667085',
                          fontSize: '14px',
                          fontWeight: '400',
                        }}
                      >{formatDate(row.updatedAt)}</span></TableCell>
                    </TableRow>
                  ))}

                </TableBody>
              </Table>
            </TableContainer>
          </div>      </div>

        <div className="mobile-view">
          <img src={Logo} alt="assim-logo" />
          <MenuIcon className="hamburger" onClick={handleClick} />
        </div>

        {open && <div className="overlay" />}
      </div>
    </>

  );
};

export default Achievements;
