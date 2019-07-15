import React from "react";
import styled from "styled-components";

// abstract CSS to the component level itself

// In React, CSS-in-JS lets you think and design styles in abstraction
//  in the component level, leveraging the principles of modularity and isolation,
// unit-testing, DRY principle and so on. It’s a mind-bender, but often a practical one.

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use them like any other React component – except they're styled!
function Component2() {
  return (
    <Wrapper>
      <Title>This is a styled component.</Title>
    </Wrapper>
  );
}

export default Component2;
