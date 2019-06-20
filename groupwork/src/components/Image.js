import React from "react";

const Image = ({ image }) => {
  const style = {
    backgroundImage: `url(${image})`
  };

  return <div className="image" style={style} />;
};

export default Image;
