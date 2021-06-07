import React, { useEffect } from "react";

const List = ({ setCount, count, log, setLog }) => {
  useEffect(() => {
    console.log("Component did mount");
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  return (
    <div>
      {/*   <button className="btn" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button
        className="btn"
        onClick={() => setCount((prevState) => prevState - 1)}
      >
        -
      </button> */}
      <h1>List Component</h1>
    </div>
  );
};

export default List;
