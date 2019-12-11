import React from "react";

const OperatorButton = ({op}) => {
  return (
    <div>
      <button className = "operator-button">{op}</button>
    </div>
  );
};

export default OperatorButton