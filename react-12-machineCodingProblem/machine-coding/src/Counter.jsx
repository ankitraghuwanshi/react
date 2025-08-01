//Build a Counter App/Stopwatch
// Start -> Start my timer
// Pause -> Pause my timer
// Resume -> Resume my timer
// Reset -> reset my timer

// Extra challenge -> Display the time in the format hh:mm:ss
// Initially, the value would be 00:00:00

import React, { useCallback, useEffect, useRef, useState } from 'react'

function Counter() {

    const [counter,setCounter]=useState(0)
    const [isRunning,setIsRunning]=useState(false)
    const timerRef=useRef(null)

    useEffect(()=>{
        return ()=>{
            clearInterval(timerRef.current)
        }
    },[])

    const startTimer=useCallback(()=>{
        setIsRunning(true)
        timerRef.current=setInterval(()=>{
            setCounter((prev)=>prev+1)
        },1000)
    },[])

    const stopTimer=useCallback(()=>{
        setIsRunning(false)
        clearInterval(timerRef.current)
        //timerRef.current=null
    },[])

    const resetTimer=useCallback(()=>{
        setIsRunning(false)
        clearInterval(timerRef.current)
        setCounter(0)
    },[])

    const D=()=>{
       const a=new Date(counter * 1000).toISOString
       return a.slice(11, 19)
    }

    return (
        <div>
            <div>time : {counter}</div>
            <div></div>
            <button disabled={isRunning} onClick={startTimer}>Start</button>
            <button disabled={!isRunning} onClick={stopTimer}>stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}

export default Counter