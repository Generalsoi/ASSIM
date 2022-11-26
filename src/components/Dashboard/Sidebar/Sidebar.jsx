import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import Logo from "../../../assets/images/Logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import UpgradeModal from "../UpgradeModal/UpgradeModal";
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';

const Sidebar = (props) => {
  const [upgrade, setUpgradeModal] = useState(false);
  const location = useLocation()
  const [current_path, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location])

  const handleMenu1 =
    (current_path === "/dashboard" && "activeMenu") + " sidebar-link";
  const handleMenu2 =
    (current_path === "/classes" && "activeMenu") + " sidebar-link";
  const handleMenu3 =
    (current_path === "/documents" && "activeMenu") + " sidebar-link";
  const handleMenu4 =
    (current_path === "/schedule" && "activeMenu") + " sidebar-link";
  const handleMenu5 =
    (current_path === "/achivements" && "activeMenu") + " sidebar-link";
  const handleMenu6 =
    (current_path === "/settings" && "activeMenu") + " sidebar-link";

  const handleLogout = () => {
    localStorage.removeItem("userInfo")
    window.location.href = '/sign-in';
  }

  return (
    <div className="main-sidebar">
      <div className="assim-logo">
        <img src={Logo} alt="assim-logo" />
      </div>

      <div className="sidebar-links">
        <ul>
          <Link to="/dashboard">
            <li className={handleMenu1}>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.89988 16.8371C11.6624 16.8371 13.0749 18.2634 13.0749 20.0384V24.2996C13.0749 26.0621 11.6624 27.4996 9.89988 27.4996H5.67488C3.92488 27.4996 2.49988 26.0621 2.49988 24.2996V20.0384C2.49988 18.2634 3.92488 16.8371 5.67488 16.8371H9.89988ZM24.325 16.8371C26.075 16.8371 27.5 18.2634 27.5 20.0384V24.2996C27.5 26.0621 26.075 27.4996 24.325 27.4996H20.1C18.3375 27.4996 16.925 26.0621 16.925 24.2996V20.0384C16.925 18.2634 18.3375 16.8371 20.1 16.8371H24.325ZM9.89988 2.5C11.6624 2.5 13.0749 3.9375 13.0749 5.70125V9.9625C13.0749 11.7375 11.6624 13.1625 9.89988 13.1625H5.67488C3.92488 13.1625 2.49988 11.7375 2.49988 9.9625V5.70125C2.49988 3.9375 3.92488 2.5 5.67488 2.5H9.89988ZM24.325 2.5C26.075 2.5 27.5 3.9375 27.5 5.70125V9.9625C27.5 11.7375 26.075 13.1625 24.325 13.1625H20.1C18.3375 13.1625 16.925 11.7375 16.925 9.9625V5.70125C16.925 3.9375 18.3375 2.5 20.1 2.5H24.325Z" fill="#7777F9" />
              </svg>
              <p>Dashboard</p>
            </li>
          </Link>

          <Link to="/classes">
            <li className={handleMenu2}>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.9656 25.4602C10.9169 25.4602 7.45813 24.8477 7.45813 22.3952C7.45813 19.9427 10.8944 17.8077 14.9656 17.8077C19.0144 17.8077 22.4731 19.9227 22.4731 22.374C22.4731 24.8252 19.0369 25.4602 14.9656 25.4602Z" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M14.9657 14.3109C17.6232 14.3109 19.7782 12.1571 19.7782 9.49962C19.7782 6.84212 17.6232 4.68712 14.9657 4.68712C12.3082 4.68712 10.1532 6.84212 10.1532 9.49962C10.1457 12.1471 12.2832 14.3021 14.9319 14.3109H14.9657Z" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22.9527 12.9895C24.499 12.5757 25.639 11.1657 25.639 9.487C25.639 7.73575 24.3977 6.27325 22.7452 5.93575" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23.679 16.9305C25.8715 16.9305 27.744 18.4167 27.744 19.7442C27.744 20.5255 27.0978 21.3767 26.1178 21.6067" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.97974 12.9895C5.43224 12.5757 4.29224 11.1657 4.29224 9.487C4.29224 7.73575 5.53474 6.27325 7.18599 5.93575" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.25226 16.9305C4.05976 16.9305 2.18726 18.4167 2.18726 19.7442C2.18726 20.5255 2.83351 21.3767 3.81476 21.6067" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p>Classes</p>
            </li>
          </Link>

          <Link to="/documents">
            <li className={handleMenu3}>
              <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.645 18.2788H7.62" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.645 13.0463H7.62" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.0637 7.82501H7.62" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M16.8857 1.43726C16.8857 1.43726 7.28948 1.44226 7.27448 1.44226C3.82448 1.46351 1.68823 3.73351 1.68823 7.19601V18.691C1.68823 22.171 3.84073 24.4498 7.32073 24.4498C7.32073 24.4498 16.9157 24.446 16.932 24.446C20.382 24.4248 22.5195 22.1535 22.5195 18.691V7.19601C22.5195 3.71601 20.3657 1.43726 16.8857 1.43726Z" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p>Documents</p>
            </li>
          </Link>

          <Link to="/schedule">
            <li className={handleMenu4}>
              <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.86627 10.755H24.1463" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.5525 15.6375H18.5615" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.0062 15.6375H13.0152" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.44751 15.6375H7.45651" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.5525 20.495H18.5615" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.0062 20.495H13.0152" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.44751 20.495H7.45651" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.055 1.5V5.61375" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.95752 1.5V5.61375" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M18.2978 3.47399H7.7137C4.04284 3.47399 1.75 5.51891 1.75 9.27777V20.5898C1.75 24.4078 4.04284 26.5 7.7137 26.5H18.2863C21.9687 26.5 24.25 24.4433 24.25 20.6844V9.27777C24.2615 5.51891 21.9803 3.47399 18.2978 3.47399Z" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p>Schedule</p>
            </li>
          </Link>
          <Link to="/achivements">
            <li className={handleMenu5}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.21375 11.7525V20.3275" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.0475 7.64875V20.3275" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19.7863 16.2837V20.3275" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M19.8571 1.5H8.14286C4.05952 1.5 1.5 4.3901 1.5 8.48145V19.5186C1.5 23.6099 4.04762 26.5 8.14286 26.5H19.8571C23.9524 26.5 26.5 23.6099 26.5 19.5186V8.48145C26.5 4.3901 23.9524 1.5 19.8571 1.5Z" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p>Achievements</p>
            </li>
          </Link>
          <Link to="/settings">
            <li className={handleMenu6}>
              <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.7776 0C13.6687 0 14.5348 0.365881 15.1558 1.00182C15.7756 1.64149 16.1178 2.51885 16.0917 3.40867C16.0942 3.60903 16.1601 3.8405 16.2796 4.04336C16.4775 4.37937 16.7898 4.61582 17.1607 4.71289C17.5316 4.80499 17.9198 4.75521 18.2496 4.55982C19.8426 3.6501 21.8699 4.19518 22.7796 5.77569L23.5549 7.1185C23.5748 7.15459 23.5922 7.18943 23.6072 7.22552C24.431 8.78238 23.881 10.7425 22.3502 11.6372C22.1275 11.7654 21.947 11.9446 21.8226 12.1612C21.6297 12.4959 21.5762 12.8942 21.6732 13.2601C21.7728 13.6334 22.0105 13.9433 22.3453 14.1349C23.1007 14.5693 23.6644 15.301 23.8897 16.146C24.1149 16.9898 23.9917 17.9058 23.5524 18.6612L22.7261 20.0376C21.8164 21.6007 19.7891 22.142 18.2123 21.231C18.002 21.1103 17.7593 21.0444 17.5179 21.0381H17.5104C17.1507 21.0381 16.7811 21.1912 16.5123 21.4588C16.2398 21.7313 16.0904 22.0947 16.0929 22.4805C16.0842 24.3087 14.5971 25.7871 12.7776 25.7871H11.2183C9.39009 25.7871 7.90293 24.3012 7.90293 22.473C7.90044 22.2478 7.83572 22.0138 7.71501 21.811C7.51962 21.47 7.20352 21.2261 6.83888 21.129C6.47674 21.0319 6.07974 21.0854 5.75369 21.2746C4.97215 21.7102 4.05247 21.816 3.21119 21.5795C2.37116 21.3418 1.64562 20.7644 1.22 19.999L0.442193 18.6587C-0.467531 17.0807 0.073823 15.0584 1.64935 14.1474C2.09612 13.8898 2.37365 13.4094 2.37365 12.8942C2.37365 12.379 2.09612 11.8973 1.64935 11.6397C0.0725786 10.7238 -0.467531 8.69651 0.440948 7.1185L1.28471 5.73338C2.18199 4.17278 4.21052 3.62272 5.79227 4.5312C6.00756 4.65938 6.24153 4.72409 6.47923 4.72658C7.25455 4.72658 7.90293 4.08691 7.91537 3.30039C7.91039 2.43298 8.25263 1.60042 8.87612 0.971949C9.5021 0.344724 10.3334 0 11.2183 0H12.7776ZM12.7776 1.86674H11.2183C10.8325 1.86674 10.4716 2.01732 10.199 2.28862C9.92772 2.56117 9.77962 2.92331 9.78211 3.30911C9.75597 5.12855 8.26881 6.59332 6.46803 6.59332C5.89058 6.5871 5.33429 6.43154 4.85143 6.14282C4.17318 5.75702 3.2871 5.99472 2.89011 6.68541L2.04759 8.07053C1.6618 8.74007 1.89825 9.62491 2.58521 10.0244C3.60445 10.6143 4.24038 11.7144 4.24038 12.8942C4.24038 14.074 3.60445 15.1729 2.58272 15.764C1.89949 16.1597 1.66304 17.0396 2.05879 17.7241L2.84406 19.0781C3.0382 19.4278 3.35555 19.6804 3.72268 19.7837C4.08856 19.8857 4.49177 19.8422 4.82778 19.6555C5.32185 19.3655 5.8968 19.215 6.47425 19.215C6.75924 19.215 7.04423 19.2511 7.32299 19.3257C8.16427 19.5522 8.89479 20.1147 9.32787 20.8701C9.60913 21.3443 9.76469 21.8981 9.76966 22.4631C9.76966 23.272 10.4193 23.9204 11.2183 23.9204H12.7776C13.5728 23.9204 14.2225 23.2757 14.2262 22.4805C14.2212 21.6019 14.5647 20.7668 15.1932 20.1384C15.8129 19.5186 16.6791 19.1465 17.5453 19.1714C18.1127 19.1851 18.6591 19.3382 19.1407 19.612C19.8339 20.009 20.7187 19.7725 21.1194 19.088L21.9458 17.7104C22.13 17.393 22.1835 16.9948 22.0852 16.6277C21.9881 16.2605 21.7442 15.9419 21.4156 15.754C20.6465 15.311 20.0977 14.5967 19.87 13.7404C19.6447 12.9004 19.7679 11.9832 20.2072 11.2278C20.4935 10.73 20.9129 10.3106 21.4156 10.0219C22.0901 9.62739 22.3266 8.74505 21.9346 8.05809C21.9184 8.03071 21.9035 8.00209 21.891 7.97222L21.1617 6.70782C20.7648 6.01712 19.8812 5.77942 19.188 6.17393C18.4388 6.61697 17.5477 6.74391 16.6915 6.51865C15.8366 6.29713 15.1197 5.75578 14.673 4.99166C14.3867 4.51377 14.2312 3.95749 14.2262 3.39124C14.2374 2.96563 14.0881 2.58357 13.8168 2.30356C13.5467 2.02479 13.1671 1.86674 12.7776 1.86674ZM12.0034 8.67922C14.3269 8.67922 16.2173 10.5708 16.2173 12.8943C16.2173 15.2178 14.3269 17.1069 12.0034 17.1069C9.67994 17.1069 7.78955 15.2178 7.78955 12.8943C7.78955 10.5708 9.67994 8.67922 12.0034 8.67922ZM12.0034 10.546C10.7091 10.546 9.65629 11.6 9.65629 12.8943C9.65629 14.1886 10.7091 15.2402 12.0034 15.2402C13.2977 15.2402 14.3505 14.1886 14.3505 12.8943C14.3505 11.6 13.2977 10.546 12.0034 10.546Z" fill="#8A8A8A" />
              </svg>
              <p>Settings</p>
            </li>
          </Link>
        </ul>
      </div>

      <div className="sidebar-btns">
        <button
          className="upgrade-plan-btn"
          onClick={() => setUpgradeModal(true)}
        >
          Upgrade Plan
        </button>
        <button className="contact-support-btn">Contact Support</button>
        <div className="sign-out" onClick={handleLogout}>
          <LogoutIcon />
          <p>Sign Out</p>
        </div>
      </div>

      {upgrade && <UpgradeModal setUpgradeModal={setUpgradeModal} />}
    </div>
  );
};

export default Sidebar;
