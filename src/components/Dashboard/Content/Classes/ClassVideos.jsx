import React, { useState } from "react";
import StudentDashboardHeader from "../../../../common/StudentDashboardHeader/StudentDashboardHeader";
import Sidebar from "../../Sidebar/Sidebar";
import "./Classes.css";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../../../assets/images/Logo.png";
import { useLocation } from "react-router-dom";
import useAxiosGetWithoutToken from "../../../../customHooks/useAxiosGetWithoutToken";
import { accessToken } from "../../../../config";
import BackdropLoader from '../../../Loader/BackdropLoader';
import Play from "../../../../assets/images/play.png";

const ClassVideos = () => {
    const [activeMenu, setActiveMenu] = useState("menu1");
    const [open, setOpen] = useState(false);
    const [classes, setClasses] = useState([]);

    const handleClick = () => {
        setOpen(!open);
    };
    const search = useLocation().search;
    let classId = new URLSearchParams(search).get("video");


    const { response, loading } = useAxiosGetWithoutToken({
        method: "get",
        url: "videos?classId=" + classId + "&access_token=" + accessToken,
    });

    React.useEffect(() => {
        if (response) {
            setClasses(response.rows);
        }
    }, [response]);
    return (
        <>
            {loading && <BackdropLoader />}
            <div className="dashboard">
                <div className={open ? "sidebar-mobile open" : "sidebar"}>
                    <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                </div>
                <div className="content">
                    <div className="classes">
                        <StudentDashboardHeader />

                        <div className="welcome-message">
                            <h2>Videos</h2>
                        </div>
                        <br></br>
                        <div className="assingments-div">
                            {classes.length === 0 && <h3>No Videos Found</h3>}

                            <div className="video_grid">
                                {classes && classes.map((content, index) => (
                                    <div className="top_class_video" key={content.id}>
                                        <video
                                            id={content.id}
                                            width="100%"
                                            height="100%"
                                        >
                                            <source src={content.videoUrl} type="video/mp4" />
                                        </video>
                                        <div className="video_text"
                                            id={index}
                                        >
                                            <h5>Intro Tech</h5>

                                            <div className="play_btn">
                                                <img src={Play} alt="paly"
                                                    id={content.id}

                                                    onClick={() => {
                                                        const video = document.getElementById(content.id);
                                                        video.play();

                                                        // show video controls when video is playing
                                                        video.onplaying = () => {
                                                            video.controls = true;
                                                        };

                                                        // hide text when video is playing
                                                        const videoText = document.getElementById(index);
                                                        videoText.style.display = "none";

                                                        // show text when video has ended
                                                        video.addEventListener("ended", () => {
                                                            videoText.style.display = "flex";
                                                        });

                                                        // show text when video is paused
                                                        video.addEventListener("pause", () => {
                                                            videoText.style.display = "flex";
                                                            video.controls = false;
                                                        });

                                                    }}
                                                />
                                            </div>

                                            <div className="video_text_bottom">
                                                <p>Intro.mp4</p>
                                                <span>12.6 MB</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
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

export default ClassVideos;
