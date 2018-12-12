import React, { useState, useEffect } from "react";

function useCounter({ initialState, step }) {
  const initialCount = () => Number(window.localStorage.getItem("count") || 0);
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + step);
  useEffect(
    () => {
      window.localStorage.setItem("count", count);
      console.log("execution reader..");
    },
    [count]
  );
  return {
    count,
    increment
  };
}

export default function Counter() {
  const { count, increment } = useCounter({ initialState: 1, step: 2 });
  return <button onClick={increment}>{count}</button>;
}
