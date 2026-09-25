import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  function increment() {
    if (count > 10) {
      console.log('count is greater than 10')
    }
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  return (
    <div>
      <button onClick={increment}>increase</button>
      <span>{count}</span>
      <button onClick={decrement}>decrease</button>
    </div>
  )
}

export default Counter