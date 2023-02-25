import React from "react";
import "./RecentClass.css";
import PersonIcon from "@mui/icons-material/Person";
import ClassOneImg from "../../../../../assets/images/classone.png";
import ClassTwoImg from "../../../../../assets/images/classtwo.png";
import ClassThreeImg from "../../../../../assets/images/classthree.png";
import ClassFourImg from "../../../../../assets/images/classfour.png";
import { getPostedDate } from "../../../../../functions";
import { Link } from "react-router-dom";

const RecentClass = ({ classes }) => {

  return (
    <div className="single-classes">
      {classes && classes.slice(0, 4).map((content) => (
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

export default RecentClass;
