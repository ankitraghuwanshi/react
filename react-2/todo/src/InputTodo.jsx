import React, { useState } from 'react'

function InputTodo({setTodoList}) {
    const [value,setValue]=useState("")

    const handleChange=(e)=>{
        setValue(e.target.value)
    }
    const addTodo=()=>{
        //add this current value to the todolist
        setTodoList((todoListPrevious)=>{   //feature:- callback contain todolist
            return [...todoListPrevious, value]
        })
        //make input as ""
        setValue("")
    }
    return (
        <div>
            <input type="text" value={value} onChange={handleChange}/>
            <button onClick={addTodo}>add</button>
        </div>
    )
}

export default InputTodo