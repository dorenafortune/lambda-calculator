import React from "react";
import { tsPropertySignature } from "@babel/types";

const NumberButton = (props) => {
  return (
    <div>
    <button className="number-button" onClick = {() => props.addNumber(props.numbs)}> 
    {props.numbs}
    </button>
    </div>
  );
};

export default NumberButton

// * Display a button element rendering the data being passed down from the parent container on props */

