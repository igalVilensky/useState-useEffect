import React, { useEffect } from "react";

const List = ({ setCount, count, log, setLog }) => {
  useEffect(() => {
    console.log("I am Ready ");
  }, [count]);

  return (
    <div>
      <button className="btn" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button
        className="btn"
        onClick={() => setCount((prevState) => prevState - 1)}
      >
        -
      </button>
    </div>
  );
};

export default List;
