import React from "react";
import "./TopClassesAndPerformers.css";
import PersonIcon from "@mui/icons-material/Person";
import TopClassOne from "../../../../../assets/images/topclassone.png";
import TopClassTwo from "../../../../../assets/images/topclasstwo.png";
import TopClassThree from "../../../../../assets/images/topclassthree.png";
import TopClassFour from "../../../../../assets/images/topclassfour.png";
import TopClassFive from "../../../../../assets/images/topclassfive.png";
import TopClassSix from "../../../../../assets/images/topclasssix.png";

const TopClassesAndPerformers = () => {
  const topClassesContent = [
    {
      id: 1,
      title: "ASSIM",
      noOfChapters: 9,
      image: <img src={TopClassOne} alt="top class one" />,
    },
    {
      id: 2,
      title: "ASSIM",
      noOfChapters: 9,
      image: <img src={TopClassTwo} alt="top class two" />,
    },
    {
      id: 3,
      title: "ASSIM",
      noOfChapters: 9,
      image: <img src={TopClassThree} alt="top class three" />,
    },
    {
      id: 4,
      title: "Ms. Faith Okeke",
      noOfChapters: 19,
      image: <img src={TopClassFour} alt="top class four" />,
    },
    {
      id: 5,
      title: "Ms. Faith Okeke",
      noOfChapters: 19,
      image: <img src={TopClassFive} alt="top class five" />,
    },
    {
      id: 6,
      title: "Ms. Faith Okeke",
      noOfChapters: 19,
      image: <img src={TopClassSix} alt="top class six" />,
    },
  ];

  return (
    <div className="topClassesAndPerformers">
      <div className="top-classes">
        <h4>Top Classes</h4>

        <div className="top-classes-div">
          {topClassesContent.map((content) => (
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
          ))}
        </div>
      </div>

      <div className="top-performers">
        <h4>Top Performing Students</h4>
      </div>
    </div>
  );
};

export default TopClassesAndPerformers;
