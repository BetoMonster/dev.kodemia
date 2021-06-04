import React, { useState, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const modifyCounter = (action) => {
    if (action === "increment") {
      const newCounter = counter + 1;
      setCounter(newCounter);
      return;
    }
    const newCounter = counter - 1;
    setCounter(newCounter);
    return;
  };

  useEffect(() => {
    console.log("1");
  }, []);

  useEffect(() => {
    console.log("2");
  }, [counter]);

  useEffect(() => {
    console.log("3");
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p>{counter}</p>
          <button
            className="btn btn-primary"
            onClick={() => modifyCounter("increment")}
          >
            +
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => modifyCounter("decrement")}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
