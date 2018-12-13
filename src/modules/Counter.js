/* @flow */
import React, { useState, useEffect } from 'react'

type CounterProps = {
  initial?: number,
  step?: number
}

function Counter({
  initial,
  step,
}: CounterProps) {
  const [count, setCount] = useState(initial || 0)
  const incrementNumber = () => count + (step || 0)
  const increment = () => setCount(incrementNumber)

  useEffect(
    () => {
      window.localStorage.setItem('count', count)
    },
    [count],
  )

  return <button type="button" onClick={increment}>{count}</button>
}

Counter.defaultProps = {
  initial: 0,
  step: 1,
}

export default Counter
