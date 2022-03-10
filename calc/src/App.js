import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(1);

  function handleClick(e) {
    if (e === 7) {
      setValue(value + 1);
    } else if (e === 8) {
      setValue(value + 2);
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
          <button className="btn all-clear">AC</button>
          <button className="btn delete">DEL</button>
          <button className="btn btn-action divide">÷</button>
        </div>
        <div className="input-row">
          <button className="btn seven num" onClick={() => handleClick(7)}>
            7
          </button>
          <button className="btn eight num" onClick={() => handleClick(8)}>
            8
          </button>
          <button className="btn nine num">9</button>
          <button className="btn btn-action multiply">x</button>
        </div>
        <div className="input-row">
          <button className="btn four num">4</button>
          <button className="btn five num">5</button>
          <button className="btn six num">6</button>
          <button className="btn btn-action subtract">-</button>
        </div>
        <div className="input-row">
          <button className="btn one num">1</button>
          <button className="btn two num">2</button>
          <button className="btn three num">3</button>
          <button
            className="btn btn-action add"
            onClick={() => console.log("I was clicked")}
          >
            +
          </button>
        </div>
        <div className="input-row big-row">
          <button className="btn zero num">0</button>
          <button className="btn btn-action equals">=</button>
        </div>
      </main>
    </div>
  );
}

export default App;
