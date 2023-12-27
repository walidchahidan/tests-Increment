import { useState } from "react";
import "./increment-test.css";

export default function Count() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter - 1);
  };
  const handleDecrement = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <div>
        <h1>Test Incrementation</h1>
        <span
          style={{
            color: counter > 0 ? "blue" : counter < 0 ? "red" : "black",
          }}
        >
          {counter}
        </span>
      </div>
      <div className="buttons">
        <button id="btnIncrement" onClick={handleIncrement}>
          -
        </button>
        <button id="btnDecrement" onClick={handleDecrement}>
          +
        </button>
      </div>
    </>
  );
}
