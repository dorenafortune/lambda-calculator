import React, {useState} from "react";
import { numbers } from '../../../data';
import NumberButton from "./NumberButton";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = props => {
  // STEP 2 - add the imported data to state

  return (
    <div className = "number-buttonStyle">
  {numbers.map((numbs) => (
        <NumberButton numbs={numbs} key={numbs} />
  ))}     
  </div>
   )
};


//   const [state, setNumberState] = useState(numbers); 
//   const numbersArray = state.map(element => (
//     <NumberButton 
//     value = {element}
//     numDisplay={props.numDisplay}
//     />
//   ));

//   return (
//     <div>
//       {numbersArray}
//     </div>
//   );
// };

//   return (
//     <div>
  
//   {numbers.map((numbs) => (
//         <NumberButton numbs={numbs} key={numbs} />
//   ))}     
//   </div>
//    )
// };
/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/

  export default Numbers