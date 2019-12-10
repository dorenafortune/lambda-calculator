import React from "react";

const NumberButton = ({numbs}) => {
  return (
    <div>
    <button className="number-button" onClick = {() => console.log(numbs)}> 
    {numbs}
    </button>
    </div>
  );
};

export default NumberButton

// * Display a button element rendering the data being passed down from the parent container on props */

