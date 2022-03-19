import React from "react";
import "./RecentClass.css";
import PersonIcon from "@mui/icons-material/Person";
import ClassOneImg from "../../../../assets/images/classone.png";
import ClassTwoImg from "../../../../assets/images/classtwo.png";
import ClassThreeImg from "../../../../assets/images/classthree.png";
import ClassFourImg from "../../../../assets/images/classfour.png";

const RecentClass = () => {
  const recentClassContents = [
    {
      id: "1",
      image: ClassOneImg,
      title: "English Language for SSS",
      tutor: "Mrs. Helen Edet",
      length: "10 hours",
    },
    {
      id: "2",
      image: ClassTwoImg,
      title: "Mathematics for SSS 1-3",
      tutor: "Mrs. Helen Edet",
      length: "10 hours",
    },
    {
      id: "3",
      image: ClassThreeImg,
      title: "Computer Studies",
      tutor: "Mrs. Helen Edet",
      length: "10 hours",
    },
    {
      id: "4",
      image: ClassFourImg,
      title: "Fine Art for SSS",
      tutor: "Mrs. Helen Edet",
      length: "10 hours",
    },
  ];

  return (
    <div className="recent-classes">
      {recentClassContents.map((content) => (
        <div className="recent-class" key={content.id}>
          <div className="class-image">
            <img src={content.image} alt={content.image} />
          </div>
          <h5 className="class-title">{content.title}</h5>
          <div className="class-tutor">
            <div>
              <PersonIcon className="person-icon" />
              <p className="class-tutor-name">{content.tutor}</p>
            </div>
            <div className="class-length">
              <p>{content.length}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentClass;
