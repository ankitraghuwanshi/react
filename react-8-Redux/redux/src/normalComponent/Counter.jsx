import React, { useState } from 'react'

function Counter() {
  const [ counter, setCounter ] = useState(0)

  const incrementValue = () => {
    setCounter(counter + 1)
  }

  return (
    <>
        <div>Counter Value: {counter}</div>
        <button onClick={incrementValue}>Increment By 1</button>
    </>


  )
}

export default Counter