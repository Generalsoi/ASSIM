import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ClassOneImg from "../../../../assets/images/classone.png";
import { getPostedDate } from "../../../../functions";

const RecentlyAdded = ({classes}) => {
  
  return (
    <React.Fragment>
      <h5 className="class-section-heading">Recently Added</h5>
      <div className="single-classes">
        { classes && classes.map((content) => (
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
      </div>
    </React.Fragment>
  );
};

export default RecentlyAdded;
