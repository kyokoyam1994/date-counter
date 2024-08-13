import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const currDate = new Date();
  currDate.setDate(currDate.getDate() + count);

  return (
    <div className="container">
      <Counter
        name="Step"
        value={step}
        preventNegative={true}
        onIncrement={() => setStep((s) => s + 1)}
        onDecrement={() => setStep((s) => s - 1)}
      />
      <Counter
        name="Count"
        value={count}
        preventNegative={false}
        onIncrement={() => setCount((c) => c + step)}
        onDecrement={() => setCount((c) => c - step)}
      />
      <span>{`${Math.abs(count)} ${Math.abs(count) === 1 ? "day" : "days"} ${
        count < 0 ? "ago from today" : "from today"
      } is ${currDate.toLocaleDateString()}`}</span>
    </div>
  );
}

interface CounterProps {
  name: string;
  value: number;
  preventNegative?: boolean;
  onIncrement: () => void;
  onDecrement: () => void;
}

function Counter({
  name,
  value,
  preventNegative,
  onIncrement,
  onDecrement,
}: CounterProps) {
  return (
    <div className="counter">
      <button disabled={preventNegative && value === 0} onClick={onDecrement}>
        -
      </button>
      <span>{`${name} : ${value}`}</span>
      <button onClick={onIncrement}>+</button>
    </div>
  );
}

export default App;
