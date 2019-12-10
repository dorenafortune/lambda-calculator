import React from "react";

const SpecialButton = ({special}) => {
  return (
    <div>
      <button className = "special-button">{special}</button>
    </div>
  );
};

export default SpecialButton