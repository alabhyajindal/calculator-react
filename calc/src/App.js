import "./App.css";
import { useState } from "react";

function App() {
  let [value, setValue] = useState("");

  function handleClick(e) {
    // Updating state when the number buttons are clicked
    if (e === 0) {
      setValue(value + 0);
    } else if (e === 1) {
      setValue(value + 1);
    } else if (e === 2) {
      setValue(value + 2);
    } else if (e === 3) {
      setValue(value + 3);
    } else if (e === 4) {
      setValue(value + 4);
    } else if (e === 5) {
      setValue(value + 5);
    } else if (e === 6) {
      setValue(value + 6);
    } else if (e === 7) {
      setValue(value + 7);
    } else if (e === 8) {
      setValue(value + 8);
    } else if (e === 9) {
      setValue(value + 9);
    } else if (e === "clear") {
      setValue((value = ""));
    } else if (e === "del") {
      setValue(value.slice(0, -1));
    }
  }

  return (
    <div className="App">
      <main className="app">
        <input
          className="entry"
          type="number"
          onChange={handleClick}
          value={value}
        />
        <div className="input-row big-row">
          <button
            className="btn all-clear"
            onClick={() => handleClick("clear")}
          >
            AC
          </button>
          <button className="btn delete" onClick={() => handleClick("del")}>
            DEL
          </button>
          <button className="btn btn-action divide">÷</button>
        </div>
        <div className="input-row">
          <button className="btn seven num" onClick={() => handleClick(7)}>
            7
          </button>
          <button className="btn eight num" onClick={() => handleClick(8)}>
            8
          </button>
          <button className="btn nine num" onClick={() => handleClick(9)}>
            9
          </button>
          <button className="btn btn-action multiply">x</button>
        </div>
        <div className="input-row">
          <button className="btn four num" onClick={() => handleClick(4)}>
            4
          </button>
          <button className="btn five num" onClick={() => handleClick(5)}>
            5
          </button>
          <button className="btn six num" onClick={() => handleClick(6)}>
            6
          </button>
          <button className="btn btn-action subtract">-</button>
        </div>
        <div className="input-row">
          <button className="btn one num" onClick={() => handleClick(1)}>
            1
          </button>
          <button className="btn two num" onClick={() => handleClick(2)}>
            2
          </button>
          <button className="btn three num" onClick={() => handleClick(3)}>
            3
          </button>
          <button
            className="btn btn-action add"
            onClick={() => console.log("I was clicked")}
          >
            +
          </button>
        </div>
        <div className="input-row big-row">
          <button className="btn zero num" onClick={() => handleClick(0)}>
            0
          </button>
          <button className="btn btn-action equals">=</button>
        </div>
      </main>
    </div>
  );
}

export default App;
