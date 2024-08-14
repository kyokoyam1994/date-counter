import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const currDate = new Date();
  currDate.setDate(currDate.getDate() + count);

  return (
    <div className="container">
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        ></input>
        <output>{step}</output>
      </div>
      <Counter
        value={count}
        preventNegative={false}
        onValueChange={(value) => setCount(value)}
        onIncrement={() => setCount((c) => c + step)}
        onDecrement={() => setCount((c) => c - step)}
      />
      <span>{`${Math.abs(count)} ${Math.abs(count) === 1 ? "day" : "days"} ${
        count < 0 ? "ago from today" : "from today"
      } is ${currDate.toLocaleDateString()}`}</span>
      <button onClick={resetDefault}>Reset</button>
    </div>
  );

  function resetDefault() {
    setStep(0);
    setCount(0);
  }
}

interface CounterProps {
  value: number;
  preventNegative?: boolean;
  onIncrement: () => void;
  onValueChange: (value: number) => void;
  onDecrement: () => void;
}

function Counter({
  value,
  preventNegative,
  onIncrement,
  onValueChange,
  onDecrement,
}: CounterProps) {
  return (
    <div className="counter">
      <button disabled={preventNegative && value === 0} onClick={onDecrement}>
        -
      </button>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          if (!isNaN(+e.target.value)) {
            onValueChange(+e.target.value);
          }
        }}
      ></input>
      <button onClick={onIncrement}>+</button>
    </div>
  );
}

export default App;
