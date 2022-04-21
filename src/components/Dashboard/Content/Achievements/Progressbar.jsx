import React from "react";
import "./Progressbar.css";

const Progressbar = (props) => {
  const { completed } = props;

  return (
    <React.Fragment>
      <div className="progressbar">
        <div className="containerStyles">
          <div className="fillerStyles">
            <span className="labelStyles"></span>
          </div>
        </div>
        {`${completed}%`}
      </div>
    </React.Fragment>
  );
};

export default Progressbar;
