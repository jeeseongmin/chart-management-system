import './App.scss'
import Counter from "./components/test/Counter";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  
  return (
    <div className="App">
      <Counter count={count} onDecrease={onDecrease} onIncrease={onIncrease}/>
    </div>
  );
}

export default App;
