import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  const addValue = () => {
    console.log("clicked", counter);
    //counter = counter +1
    // if (counter < 20) {
    //   setCounter(counter + 1);
    // } else {
    //   counter = 20;
    // }
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    
  };

  const decValue = () => {
    // if (counter > 0) {
    //   setCounter(counter - 1);
    // } else {
    //   counter = 0;
    // }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button> <br />
      <button onClick={decValue}>decrease Value {counter}</button>
    </>
  );
}

export default App;
