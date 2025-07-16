import React, { useState } from 'react'
import InputTodo from './InputTodo'
import TodoList from './TodoList'

function Todo() {
    const [todoList,setTodoList]=useState([])
    console.log(todoList)
    return (
        <>
            <InputTodo setTodoList={setTodoList}/>
            <TodoList/>
        </>
    )
}

export default Todo