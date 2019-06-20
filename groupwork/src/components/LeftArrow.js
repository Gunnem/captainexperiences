import React from "react";

const LeftArrow = ({ goLeft }) => {
  return (
    <div className="left-arrow arrow" onClick={goLeft}>
      <i className="fa fa-arrow-left fa-2x" />
    </div>
  );
};

export default LeftArrow;
