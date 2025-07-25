import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import todoSlice from '../redux/todoSlice';

const todoActions = todoSlice.actions

function TodoRedux() {
    const todoSlice = useSelector((store) => store.todo)

    //distructing todoSlice
    const { todoList, currentTodoValue } = todoSlice

    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(todoActions.changeTodoValue(e.target.value))
    }
    const handleClick = () => {
        dispatch(todoActions.addTodoItem())

    }

    return (
        <>
            <h2>Todo</h2>
            <div style = {{ display : "flex" }}>
                <div className = "inputBox">
                    <input onChange={handleChange} value={currentTodoValue} type = "text"/>
                    <button onClick={handleClick}>Add New Item</button>
                </div>
                <div className = "list">
                    <ul>
                        {todoList.map((task, idx) => {
                            return <li key={idx}>{task}</li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TodoRedux;