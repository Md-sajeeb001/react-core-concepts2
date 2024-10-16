import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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

  return (
    <>
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
    </>
  );
}

export default App;
