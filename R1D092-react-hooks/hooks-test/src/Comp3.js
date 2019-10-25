import React, { useContext } from "react";
import { OuterContext } from "./Comp1";

function Comp3() {
  const value = useContext(OuterContext);
  return (
    <div style={{ background: "red" }}>
      <p>Hi, I'm nested Component 3, which uses useContext!</p>
      <p>
        The "OuterContext", declared in Comp1 provides me with this prop: {value.aPropOnContext}
      </p>
    </div>
  );
}

export default Comp3;
