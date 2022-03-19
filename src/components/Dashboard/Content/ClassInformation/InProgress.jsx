import React from "react";
import "./InProgress.css";
import PersonIcon from "@mui/icons-material/Person";
import ProgressOneImg from "../../../../assets/images/progressone.png";
import ProgressTwoImg from "../../../../assets/images/progresstwo.png";
import ProgressThreeImg from "../../../../assets/images/progressthree.png";
import ProgressFourImg from "../../../../assets/images/progressfour.png";
import ProgressFiveImg from "../../../../assets/images/progressfive.png";

const InProgress = () => {
  const inProgressContents = [
    {
      id: "1",
      image: ProgressOneImg,
      title: "Mathematics for SSS 1-3",
      tutor: "Mr. Bankole Esan",
      length: "16 hours",
    },
    {
      id: "2",
      image: ProgressTwoImg,
      title: "English Language for SSS",
      tutor: "Mrs. Helen Edet",
      length: "10 hours",
    },
    {
      id: "3",
      image: ProgressThreeImg,
      title: "Geography",
      tutor: "Mrs. Amaka Julius",
      length: "6 hours",
    },
    {
      id: "4",
      image: ProgressFourImg,
      title: "Geography",
      tutor: "Mrs. Amaka Julius",
      length: "6 hours",
    },
    {
      id: "5",
      image: ProgressFiveImg,
      title: "Geography",
      tutor: "Mrs. Amaka Julius",
      length: "6 hours",
    },
  ];

  return (
    <div className="in-progress-classes">
      {inProgressContents.map((content) => (
        <div className="in-progress-class" key={content.id}>
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

export default InProgress;
