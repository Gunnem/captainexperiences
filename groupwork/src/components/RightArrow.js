import React from "react";

const RightArrow = ({ goRight }) => {
  return (
    <div className="right-arrow arrow" onClick={goRight}>
      <i className="fa fa-arrow-right fa-2x" />
    </div>
  );
};

export default RightArrow;
