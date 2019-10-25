import React, { useContext } from "react";
import Comp3 from './Comp3';

function Comp2() {


  return (
    <div style={{ background: "yellow" }}>
    <p>Hi, I'm Component 2 and I don't forward any props!</p>
    <Comp3 />
    </div>
  );
}

export default Comp2;
