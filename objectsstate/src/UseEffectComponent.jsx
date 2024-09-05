import { useState, useEffect } from "react";

const UseEffectComponent = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count, color]);

  const addCount = () => {
    setCount((c) => c + 1);
  };

  const subtract = () => {
    setCount((c) => c - 1);
  };

  const changeColor = () => {
    setColor((c) => (c === "green" ? "red" : "green"));
  };

  return (
    <div className="useEffect">
      <h1>Use Effect Component</h1>
      <h2 style={{ color: color }}>Count: {count}</h2>
      <button onClick={addCount}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <br />
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default UseEffectComponent;
