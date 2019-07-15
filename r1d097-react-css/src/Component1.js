import React from "react";

// React lets you add CSS inline, written as attributes and passed to elements.
// inline styles just attaches the properties to the DOM node.

const divStyle = {
  padding: "20px 20px 20px 20px",
  color: "blue",
  background: "red"
};

function Component1() {
  return (
    <div style={divStyle}>
      This is a component styled with good old inline styles.
    </div>
  );
}

export default Component1;
