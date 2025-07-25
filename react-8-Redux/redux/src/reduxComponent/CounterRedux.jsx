import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import counterSlice from '../redux/counterSlice'
import userSlice from '../redux/userSlice'

const counterAction=counterSlice.actions
const userAction=userSlice.actions

function CounterRedux() {

    const state = useSelector((store)=>store.counter.count)
    const user =useSelector((store)=>store.user.name)

    const dispatch=useDispatch()

    const handleIncrement=()=>{
        dispatch(counterAction.incrementState())
        dispatch(userAction.spiderman())
    }
    const handleDecrement=()=>{
        dispatch(counterAction.decrementState())
        dispatch(userAction.ironman())
    }

    //redux prons:- it will only re-render if counterSlice changes (counter contain counterSlice inside store) 
    

    return (
        <>
            <div>CounterRedux {state} {user}</div>
            <button onClick={handleIncrement}>increment by 1</button>
            <button onClick={handleDecrement}>decreament by 1</button>
        </>
    )
}

export default CounterRedux