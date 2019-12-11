import React from "react";
import { tsPropertySignature } from "@babel/types";

const NumberButton = ({numbs}) => {
  return (
    <div>
    <button className="number-button">{numbs}
    </button>
    </div>
  );
};

export default NumberButton

// * Display a button element rendering the data being passed down from the parent container on props */

