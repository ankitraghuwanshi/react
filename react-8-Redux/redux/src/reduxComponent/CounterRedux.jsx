import React from 'react'
import { useSelector } from 'react-redux'

function CounterRedux() {

    const state = useSelector((store)=>store.counter.count)
    const user =useSelector((store)=>store.user.name)
    //redux prons:- it will only re-render if counterSlice changes (counter contain counterSlice inside store) 
    
    return (
        <div>CounterRedux {state} {user}</div>
    )
}

export default CounterRedux