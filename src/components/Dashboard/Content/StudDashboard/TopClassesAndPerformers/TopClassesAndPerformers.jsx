import React from "react";
import "./TopClassesAndPerformers.css";
// import PersonIcon from "@mui/icons-material/Person";
import TopClassOne from "../../../../../assets/images/topclassone.png";
import TopClassTwo from "../../../../../assets/images/topclasstwo.png";
import TopClassThree from "../../../../../assets/images/topclassthree.png";
import TopClassFour from "../../../../../assets/images/topclassfour.png";
import TopClassFive from "../../../../../assets/images/topclassfive.png";
import TopClassSix from "../../../../../assets/images/topclasssix.png";
import Avatar from "../../../../../assets/images/Avatar.png";
import Play from "../../../../../assets/images/play.png";

import PersonIcon from "@mui/icons-material/Person";
import ClassOneImg from "../../../../../assets/images/classone.png";
import { getPostedDate } from "../../../../../functions";

const TopClassesAndPerformers = ({ classes }) => {
  console.log(classes, 'calsses')

  // const topClassesContent = [
  //   {
  //     id: 1,
  //     title: "ASSIM",
  //     noOfChapters: 1,
  //     image: <img src={TopClassOne} alt="top class one" />,
  //     playId: 100,
  //   }
  // ];

  return (
    <div className="topClassesAndPerformers">
      <div className="top-classes">
        <h4>Top Classes</h4>

        <div className="top-classes-div">



          {/* <div className="single-classes"> */}
            {classes && classes.map((content) => (
              <div className="single-class" key={content.id}>
                <div className="class-image">
                  <img src={ClassOneImg} alt='class' />
                </div>
                <h5 className="class-title">{content.name}</h5>
                <div className="class-tutor">
                  <div>
                    <PersonIcon className="person-icon" />
                    <p className="class-tutor-name">{content.tutor}</p>
                  </div>
                  <div className="class-length">
                    <p>{getPostedDate(content.createdAt)}</p>
                  </div>
                </div>
              </div>
            ))}
          {/* </div> */}



          {/* {topClassesContent.map((content) => (
            <div className="top_class_video" key={content.id}>
              <video
                id={content.id}
                width="100%"
                height="100%"
              // loop
              // onMouseOver={(event) => event.target.play()}
              // onMouseOut={(event) => event.target.pause()}
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              </video>
              <div className="video_text"
                id={content.playId}
              >
                <h5>Intro Tech</h5>

                <div className="play_btn">
                  <img src={Play} alt="paly"
                    onClick={() => {
                      const video = document.getElementById(content.id);
                      video.play();

                      // show video controls when video is playing
                      video.onplaying = () => {
                        video.controls = true;
                      };

                      // hide text when video is playing
                      const videoText = document.getElementById(content.playId);
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
          ))} */}

          {/* {topClassesContent.map((content) => (
            <div className="top-classes-content" key={content.id}>

              
              <div className="top-classes-content-img">{content.image}</div>



              <div className="top-classes-content-details">
                <div>
                  <PersonIcon className="personIcon" />
                  <p>{content.title}</p>
                </div>
                <p className="no-of-chapters">
                  {content.noOfChapters} Chapters
                </p>
              </div>
            </div>
          ))} */}
        </div>
      </div>

      <div className="top-performers">
        <div className="top-performers-header">
          <h4>Top Performing Students</h4>
        </div>
        <div className="top-performers-body">
          <div className="top-performers-body-top">
            <div className="language-div">
              <div className="language-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M16.8843 5.11485H13.9413C13.2081 5.11969 12.512 4.79355 12.0474 4.22751L11.0782 2.88762C10.6214 2.31661 9.9253 1.98894 9.19321 2.00028H7.11261C3.37819 2.00028 2.00001 4.19201 2.00001 7.91884V11.9474C1.99536 12.3904 21.9956 12.3898 21.9969 11.9474V10.7761C22.0147 7.04924 20.6721 5.11485 16.8843 5.11485Z" fill="#7777F9" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.8321 6.54346C21.1521 6.91754 21.3993 7.34785 21.5612 7.81235C21.8798 8.76704 22.0273 9.77029 21.9969 10.7761V16.0291C21.9956 16.4716 21.963 16.9134 21.8991 17.3512C21.7775 18.124 21.5057 18.8655 21.0989 19.5341C20.9119 19.8571 20.6849 20.1552 20.4231 20.4214C19.2383 21.5089 17.665 22.0749 16.0574 21.992H7.93061C6.32049 22.0743 4.74462 21.5085 3.55601 20.4214C3.2974 20.1547 3.07337 19.8566 2.88915 19.5341C2.48475 18.866 2.21869 18.1237 2.1067 17.3512C2.03549 16.9141 1.99981 16.472 2 16.0291V10.7761C1.99983 10.3373 2.02357 9.89895 2.07113 9.4628C2.08113 9.38628 2.09614 9.31101 2.11098 9.23652C2.13573 9.11233 2.16005 8.99031 2.16005 8.86829C2.25031 8.34196 2.41496 7.83108 2.64908 7.35094C3.34261 5.86908 4.76525 5.11484 7.09481 5.11484H16.8754C18.1802 5.01393 19.4753 5.40673 20.5032 6.21514C20.6215 6.31552 20.7316 6.42532 20.8321 6.54346ZM6.97033 15.5411H17.0355H17.0533C17.2741 15.5507 17.4896 15.4716 17.6517 15.3216C17.8137 15.1715 17.9088 14.963 17.9157 14.7425C17.9282 14.5487 17.8644 14.3576 17.7379 14.2101C17.5924 14.0118 17.3618 13.8934 17.1155 13.8906H6.97033C6.51365 13.8906 6.14343 14.2601 6.14343 14.7159C6.14343 15.1716 6.51365 15.5411 6.97033 15.5411Z" fill="#7777F9" />
                </svg>
              </div>
              <p>English Language</p>
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_105_992" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="10" height="8">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 0.265671H9.1036V7.73432H0V0.265671Z" fill="white" />
                </mask>
                <g mask="url(#mask0_105_992)">
                  <path d="M9.10384 0.859293C9.10384 0.970103 9.07297 1.07933 9.01282 1.17589L5.05454 7.45721C4.94532 7.62976 4.75615 7.73503 4.55194 7.73503C4.34773 7.73503 4.15857 7.62976 4.04934 7.45721L0.0910644 1.17589C-0.0237027 0.993057 -0.0308261 0.761939 0.074443 0.572772C0.178921 0.382812 0.377586 0.265671 0.593665 0.265671H8.51022C8.7263 0.265671 8.92496 0.382812 9.02944 0.572772C9.0793 0.662211 9.10384 0.761148 9.10384 0.859293Z" fill="#3C4254" />
                </g>
              </svg>
            </div>
            <div className="show-more">
              <div className="show-more-btn">
                <button>SHOW MORE {'>>'}</button>
              </div>
            </div>
          </div>

          <div className="performers-divider">
          </div>

          <div className="performing-student-item">
            <div className="student-image">
              <img src={Avatar} alt="top class five" />
            </div>
            <p>Joseph Chimezie</p>
            <div className="perfomance-range">
              <svg width="50" height="4" viewBox="0 0 50 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.1" y="0.5" width="50" height="3" rx="1.5" fill="#121212" />
                <rect y="0.5" width="30.4455" height="3" rx="1.5" fill="#30E0A1" />
              </svg>
              <p className="green">65%</p>
            </div>
            <h5>420</h5>
          </div>
          <div className="performing-student-item">
            <div className="student-image">
              <img src={Avatar} alt="top class five" />
            </div>
            <p>Amanda Daniels</p>
            <div className="perfomance-range">
              <svg width="50" height="4" viewBox="0 0 50 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.1" y="0.5" width="50" height="3" rx="1.5" fill="#121212" />
                <rect y="0.5" width="30.4455" height="3" rx="1.5" fill="#FFB545" />
              </svg>
              <p className="orange">65%</p>
            </div>
            <h5>420</h5>
          </div>
          <div className="performing-student-item">
            <div className="student-image">
              <img src={Avatar} alt="top class five" />
            </div>
            <p>Adam Smith</p>
            <div className="perfomance-range">
              <svg width="50" height="4" viewBox="0 0 50 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.1" y="0.5" width="50" height="3" rx="1.5" fill="#121212" />
                <rect y="0.5" width="30.4455" height="3" rx="1.5" fill="#246CF9" />
              </svg>
              <p className="blue">65%</p>
            </div>
            <h5>420</h5>
          </div>
          <div className="performing-student-item">
            <div className="student-image">
              <img src={Avatar} alt="top class five" />
            </div>
            <p>Isabella Michaels</p>
            <div className="perfomance-range">
              <svg width="50" height="4" viewBox="0 0 50 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.1" y="0.5" width="50" height="3" rx="1.5" fill="#121212" />
                <rect y="0.5" width="30.4455" height="3" rx="1.5" fill="#FA2256" />
              </svg>
              <p className="red">65%</p>
            </div>
            <h5>420</h5>
          </div>
          <div className="performing-student-item">
            <div className="student-image">
              <img src={Avatar} alt="top class five" />
            </div>
            <p>Rukayat Yusuf</p>
            <div className="perfomance-range">
              <svg width="50" height="4" viewBox="0 0 50 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.1" y="0.5" width="50" height="3" rx="1.5" fill="#121212" />
                <rect y="0.5" width="30.4455" height="3" rx="1.5" fill="#30E0A1" />
              </svg>
              <p className="green">65%</p>
            </div>
            <h5>420</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopClassesAndPerformers;
