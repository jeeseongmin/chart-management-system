import React from "react";

function Counter({
  count,
  onDecrease,
  onIncrease,
}) {
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={onIncrease}>증가</button>
      <h3>{count}</h3>
      <button onClick={onDecrease}>감소</button>
    </div>
  );
}

export default Counter;