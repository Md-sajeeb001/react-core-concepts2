import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Friends from "./Friends";
import Team from "./Team";

function App() {
  function handelBtn() {
    alert("you click a button");
  }

  const handelArrow = () => {
    alert("arrow function button is click");
  };

  const handelMathButton = (num) => {
    alert(num * 3);
  };

  const [count, setCount] = useState(0);
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <>

    <Team></Team>
    
    <Friends></Friends>



      <h1>React Core Concepts 2</h1>
      <button onClick={handelBtn}>click me</button>
      <button onClick={handelArrow}>click arrow</button>
      <button
        onClick={() => {
          alert("under function btn is clicked");
        }}
      >
        click
      </button>
      <button
        onClick={() => {
          handelMathButton(5);
        }}
      >
        do math
      </button>

      <div
        style={{
          border: "2px solid blue",
          marginTop: "1rem",
          borderRadius: "1em",
        }}
      >
        <h3>Count: {count}</h3>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>


    </>
  );
}

export default App;
