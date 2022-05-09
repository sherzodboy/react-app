import React, { useState } from "react";
import Timer from "./components/Timer";
import "./App.css";

function App() {
  const [isTimer, setTimer] = useState(false);
  return (
    <>
      <h1>React App</h1>
      <button onClick={() => setTimer(!isTimer)}>Toggle Clicker</button>
      {isTimer && <Timer />}
    </>
  );
}

export default App;
