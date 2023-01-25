import React from "react";
import "./Progressbar.css";

const Progressbar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 8,
    width: '100%',
    backgroundColor: "#F9F5FF",
    borderRadius: 4,
    // margin: 50
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: '#7777F9',
    borderRadius: 'inherit',
    textAlign: 'right'
  };


  return (
    <React.Fragment>
      <div className="progressbar">
        <div style={containerStyles}>
          <div style={fillerStyles}></div>
        </div>
       <span 
        style={{
          color: '#344054',
          fontSize: '14px',
          fontWeight: '500',
          marginLeft: '10px'
        }}
       > {`${completed}%`}</span>
      </div>
    </React.Fragment>
  );
};

export default Progressbar;
