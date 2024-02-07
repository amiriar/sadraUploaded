import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, progress, width } = props;

  const containerStyles = {
    width: width,
    height: "50%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
    marginRight: 80,
  };

  const fillerStyles = {
    width: "100%",
    height: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "height 1s ease-in-out",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles} id="dissapear">
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
