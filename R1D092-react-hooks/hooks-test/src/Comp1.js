import React, { useState, useEffect } from "react";

function Comp1() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);

  // Similar to componentDidMount and componentDidUpdate:
  // By default, React runs the effects after every render — including the first render.
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Comp1;
