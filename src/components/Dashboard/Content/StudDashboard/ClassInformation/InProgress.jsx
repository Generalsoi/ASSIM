import React from "react";
import "./InProgress.css";
import PersonIcon from "@mui/icons-material/Person";
// import ProgressOneImg from "../../../../../assets/images/progressone.png";
// import ProgressTwoImg from "../../../../../assets/images/progresstwo.png";
// import ProgressThreeImg from "../../../../../assets/images/progressthree.png";
// import ProgressFourImg from "../../../../../assets/images/progressfour.png";
// import ProgressFiveImg from "../../../../../assets/images/progressfive.png";
import ClassOneImg from "../../../../../assets/images/classone.png";
import { getPostedDate } from "../../../../../functions";
import { Link } from "react-router-dom";

const InProgress = ({ classes }) => {

  return (
    <div className="single-classes">
      {classes && classes.filter(item => item.inProgress === true).slice(0, 4).map((content) => (
        <Link to={`/class-videos?video=${content.classId}`} key={content.id} className="single-class" >
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
        </Link>
      ))}
    </div>
  );
};

export default InProgress;
