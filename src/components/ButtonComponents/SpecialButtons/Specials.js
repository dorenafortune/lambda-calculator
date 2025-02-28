import React, {useState} from "react";
import { specials } from '../../../data';
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [state, setSpecialState] = useState(specials); 
  return (
    <div className = "special-buttonStyle">
      {specials.map((special) => (
        <SpecialButton special={special} key={special} />
  ))}     
    </div>
  );
};

export default Specials