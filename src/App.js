import React, { useState, useEffect } from "react";
import List from "./components/List";
import "./scss/main.scss";

function App() {
  /*   const [count, setCount] = useState(5);
  const [secondCount, setSecondCount] = useState(1);
  useEffect(() => {
    setCount(count + 1);
  }, [secondCount]); */

  const [showComponent, setShowComponent] = useState(true);

  return (
    <div className="App">
      {/* <h1>
        {count}--{secondCount}
      </h1> */}
      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}

      {/* <button onClick={() => setSecondCount(secondCount + 1)}>
        Increment Second
      </button> */}

      <button onClick={() => setShowComponent(true)}>Show Component</button>
      <button onClick={() => setShowComponent(false)}>Hide Component</button>
      {showComponent && <List />}
    </div>
  );
}
/*
Stop useEffect from running on every render
Only Run Once, on Mount
Run useEffect on State Change
Run useEffect When a Prop Changes
*/
export default App;
