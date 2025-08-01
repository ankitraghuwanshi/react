import React, { useEffect, useState, useRef } from 'react'

// If I want a global variable
function AppRef2() {
    const [counter, setCounter] = useState(0)
    const timerRef = useRef()

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setCounter((prev) => prev + 1)
        }, 1000)

        return () => {
            clearInterval(timerRef.current)
        }
    }, [])
  
    return (
        <div>
          <p>Seconds: {counter}</p>
          <button onClick={() => clearInterval(timerRef.current)}>Stop Timer</button>
        </div>
    );
}

export default AppRef2